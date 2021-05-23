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
            }
            
        }
    
    

    header("HTTP/1.1 400 Bad Request");
?>