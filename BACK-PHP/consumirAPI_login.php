<?php

include '../BACK-PHP/ApiRest.php';


    header("Access-control-Allow-Origin: *");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        header("HTTP/1.1 200 OK");

        $query="SELECT id_usuario FROM usuario WHERE correo_usuario='".$_POST["correo"]."' AND password_usuario='".$_POST["password"]."'";
        $resultado=methodGET($query)->fetch(PDO::FETCH_ASSOC);
        if(!$resultado){
            $resultado=array('id_usuario' => "NoExiste");
        }
        echo json_encode($resultado);
            
        exit();
    }

    
    
    header("HTTP/1.1 400 Bad Request");
?>