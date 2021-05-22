<?php
    include '../BACK-PHP/ApiRest.php';

    header("Access-control-Allow-Origin: *");
   
    
   
        if($_SERVER['REQUEST_METHOD']=='GET'){
            header("HTTP/1.1 200 OK");
            
            $query="SELECT * FROM  temas";
            $resultado=methodGET($query);
            echo json_encode($resultado->fetchAll());
            exit();
            
        }
    
    

    header("HTTP/1.1 400 Bad Request");
?>