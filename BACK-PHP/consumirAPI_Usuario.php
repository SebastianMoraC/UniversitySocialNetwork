<?php
    include '../BACK-PHP/ApiRest.php';

    header("Access-control-Allow-Origin: *");
   
    
   
        if($_SERVER['REQUEST_METHOD']=='GET'){
            if(isset($_GET['temas_interes'])){
                header("HTTP/1.1 200 OK");
                $query="SELECT id_tema_interes_usuario FROM  usuario";
                $resultado=methodGET($query);
                echo json_encode($resultado->fetchAll());
                exit();
            }elseif(isset($_GET['id_usuario_nombre'])){
                header("HTTP/1.1 200 OK");
                $query="SELECT nombre_usuario, apellido_usuario FROM  usuario WHERE id_usuario='".$_GET['id_usuario_nombre']."'";
                $resultado=methodGET($query);
                echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
                exit();
            }elseif(isset($_GET['usuarios_datos'])){
                header("HTTP/1.1 200 OK");
                $query="SELECT * FROM  usuario";
                $resultado=methodGET($query);
                echo json_encode($resultado->fetchAll());
                exit();
            }
            
        }
    
    

    header("HTTP/1.1 400 Bad Request");
?>