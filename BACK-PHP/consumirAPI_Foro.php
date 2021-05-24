<?php

include '../BACK-PHP/ApiRest.php';


    header("Access-control-Allow-Origin: *");


    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(isset($_POST['comentario_publicacion'])){
            header("HTTP/1.1 200 OK");

            $query="INSERT INTO resenias  (id_usuario,resenia,id_post) VALUES ('".$_POST["usuario"]."','".$_POST["comentario_publicacion"]."','".$_POST["idpublicacion"]."')";
            $id_resenia="SELECT MAX(id_resenia) AS id_resenia FROM resenias WHERE id_post = '".$_POST["idpublicacion"]."' AND id_usuario='".$_POST["usuario"]."'";
            $id_Nresenia=methodPOST($query, $id_resenia)->fetch(PDO::FETCH_ASSOC);

            $query="SELECT id_resenias FROM post WHERE id_post='".$_POST["idpublicacion"]."'";
            $ids_resenias=methodGET($query)->fetch(PDO::FETCH_ASSOC);

            $nuevaresenia=$ids_resenias["id_resenias"];

            if($nuevaresenia != ""){
                $nuevaresenia= $nuevaresenia.",".$id_Nresenia["id_resenia"];
            }else{
                $nuevaresenia=$id_Nresenia["id_resenia"];
            }

            $query="UPDATE post SET id_resenias='".$nuevaresenia."'WHERE id_post='".$_POST["idpublicacion"]."'";
            $resultado=methodPUT($query);
            echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
            exit();
        }elseif(isset($_POST["cantidad_estrellas"])){

            $query="SELECT cont_likes_post FROM post WHERE id_post='".$_POST["idpublicacion"]."'";
            $canridad_likes=methodGET($query)->fetch(PDO::FETCH_ASSOC);
            $nuevoCont=intval($canridad_likes["cont_likes_post"])+intval($_POST["cantidad_estrellas"]);
            echo $nuevoCont;
            $query="UPDATE post SET cont_likes_post='".$nuevoCont."'WHERE id_post='".$_POST["idpublicacion"]."'";
            $resultado=methodPUT($query);
            echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
            exit();
        }else{

            header("HTTP/1.1 200 OK");
            $query="SELECT id_usuario FROM usuario WHERE id_usuario='".$_POST["usuario"]."'";
            $resultado=methodGET($query)->fetch(PDO::FETCH_ASSOC);
            if($resultado){
                $query=" INSERT INTO  post (id_usuario,nombre_post,descripcion_post,tema_categoria,enlace_post) VALUES ('".$resultado["id_usuario"]."','".$_POST["nombre"]."','".$_POST["texto"]."','".$_POST["opcion"]."','".$_POST["enlace"]."')";
                $id="SELECT MAX(id_post) AS id_post FROM post WHERE id_usuario='".$resultado["id_usuario"]."'";
                $resultado=methodPOST($query, $id)->fetch(PDO::FETCH_ASSOC);

                if(!($_POST["dataImag"]=="")){
                    $ruta_foto="../imgs_posts/imgPost_".$resultado["id_post"].".jpeg";
                    copy($_POST["dataImag"],$ruta_foto);
                    $query="UPDATE post SET ubicacion_foto_post='".$ruta_foto."'WHERE id_post='".$resultado["id_post"]."'";
                    $resultadoPUT=methodPUT($query);

                }
            }else{
                $resultado=array('id_usuario' => "CorreoNoRegistrado");
            }
            echo json_encode($resultado);
            exit();
        }
    }


    elseif($_SERVER['REQUEST_METHOD']=='GET'){
            if(isset($_GET['post'])){
                header("HTTP/1.1 200 OK");
                $query="SELECT * FROM  post";
                $resultado=methodGET($query);
                echo json_encode($resultado->fetchAll());
                exit();
            }
            elseif(isset($_GET['reseniasPost'])){
                header("HTTP/1.1 200 OK");
                $query="SELECT * FROM  resenias WHERE id_post='".$_GET["reseniasPost"]."'";
                $resultado=methodGET($query);
                echo json_encode($resultado->fetchAll());
                exit();
            }
    }



    header("HTTP/1.1 400 Bad Request");
?>
