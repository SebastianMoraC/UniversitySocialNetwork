<?php

include '../BACK-PHP/ApiRest.php';


    header("Access-control-Allow-Origin: *");


    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['tituloventa'])){
            header("HTTP/1.1 200 OK");
            $query="SELECT id_usuario FROM usuario WHERE id_usuario='".$_POST["usuario"]."'";
            $resultado=methodGET($query)->fetch(PDO::FETCH_ASSOC);
            if($resultado){
                $query=" INSERT INTO  venta (id_usuario,titulo_venta,descripcion_venta,estadoDispo_venta,precio_venta,ubicacion_vendedor) VALUES ('".$resultado["id_usuario"]."','".$_POST["tituloventa"]."','".$_POST["descripcion"]."','".$_POST["estadoventa"]."','".$_POST["precio"]."','".$_POST["ubicacion"]."')";
                $id="SELECT MAX(id_venta) AS id_venta FROM venta WHERE id_usuario='".$resultado["id_usuario"]."'";
                $resultado=methodPOST($query, $id)->fetch(PDO::FETCH_ASSOC);

                if(!($_POST["imgProducto"]=="")){
                    $ruta_foto="../imgs_product/imgProduct_".$resultado["id_venta"].".jpeg";
                    copy($_POST["imgProducto"],$ruta_foto);
                    $query="UPDATE venta SET ubicacion_foto_venta='".$ruta_foto."'WHERE id_venta='".$resultado["id_venta"]."'";
                    $resultadoPUT=methodPUT($query);

                }
            }else{
                $resultado=array('id_usuario' => "CorreoNoRegistrado");
            }
            echo json_encode($resultado);
            exit();
        }elseif(isset($_POST['cantidad_de_productos'])){
            $query=" INSERT INTO  reg_pedidos (id_venta,comprador_id_usuario,cantidad_pedido,lugar_envio_pedido,fecha_pedido,valor_Total) VALUES ('".$_POST["id_venta"]."','".$_POST["usuario"]."','".$_POST["cantidad_de_productos"]."','".$_POST["lugar_envio_pedido"]."','".$_POST["fecha"]."','".$_POST["precio"]."')";
                $id="SELECT MAX(id_pedido) AS id_pedido FROM reg_pedidos WHERE comprador_id_usuario='".$_POST["usuario"]."'";
                $resultado=methodPOST($query, $id)->fetch(PDO::FETCH_ASSOC);
                echo json_encode($resultado);
                exit();
        }
    }
    if ($_SERVER['REQUEST_METHOD']=='GET') {
        if(isset($_GET['productosAll'])){
            header("HTTP/1.1 200 OK");
            $query="SELECT * FROM  venta";
            $resultado=methodGET($query);
            echo json_encode($resultado->fetchAll());
            exit();
        }elseif(isset($_GET['pedidosAll'])){
            header("HTTP/1.1 200 OK");
            $query="SELECT * FROM venta INNER JOIN reg_pedidos ON venta.id_venta=reg_pedidos.id_venta WHERE reg_pedidos.comprador_id_usuario='".$_GET["pedidosAll"]."'" ;
            $resultado=methodGET($query);
            $pedidos=array();
            echo json_encode($resultado->fetchAll());
            exit();
        }
    }
    header("HTTP/1.1 400 Bad Request");
?>