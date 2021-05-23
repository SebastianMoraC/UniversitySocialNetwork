<?php

include '../BACK-PHP/ApiRest.php';


    header("Access-control-Allow-Origin: *");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        header("HTTP/1.1 200 OK");

        $query="SELECT id_usuario FROM usuario WHERE correo_usuario='".$_POST["correo"]."'";
        $resultado=methodGET($query)->fetchAll();
        if(!$resultado){
            $query=" INSERT INTO  usuario (nombre_usuario,apellido_usuario,correo_usuario,password_usuario,id_tema_interes_usuario,universidad_usuario) VALUES ('".$_POST["nombre"]."','".$_POST["apellido"]."','".$_POST["correo"]."','".$_POST["contraseña"]."','".$_POST["temas_seleccionados"]."','".$_POST["universidad"]."')";
            $id="SELECT id_usuario FROM usuario WHERE correo_usuario='".$_POST["correo"]."'";
            $resultado=methodPOST($query, $id)->fetch(PDO::FETCH_ASSOC);
        }else{
            $resultado=array('id_usuario' => "YaExiste");
        }
        echo json_encode($resultado);
            
        exit();
    }

    
    
    header("HTTP/1.1 400 Bad Request");
?>