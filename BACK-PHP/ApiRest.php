<?php
    include 'BD_info.php';
    function conectar(){
        try{
            $GLOBALS['pdo']=new PDO('mysql:host='.$GLOBALS['host'].';dbname='.$GLOBALS['bd'],$GLOBALS['user'],$GLOBALS['password']);
            $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            print "Error!: no se pude conectar a la BASE DE DATOS ".$GLOBALS['bd'];
            print "\n Error: ".$e;
            die();
        }   
    }
        
    function desconectar(){
        $GLOBALS['pdo']=null;
    }

    function methodGET($query){
        try{
            conectar();
            $sentencia=$GLOBALS['pdo']->prepare($query);
            $sentencia->setFetchMode(PDO::FETCH_ASSOC);
            $sentencia->execute();
            desconectar();
            return $sentencia;

        }catch(Exception $e){
            die("Error: ".$e);
        }
    }


    function methodPOST($query,$queryID){
        try{
            conectar();
            $sentencia=$GLOBALS['pdo']->prepare($query);
            $sentencia->execute();
            $sentencia->closeCursor();
            desconectar();
            $id=methodGET($queryID);
            return $id;

        }catch(Exception $e){
            die("Error: ".$e);
        }
    }
    function methodPUT($query){
        try{
            conectar();
            $sentencia=$GLOBALS['pdo']->prepare($query);
            $sentencia->execute();
            $sentencia->closeCursor();
            desconectar();
            return $sentencia;

        }catch(Exception $e){
            die("Error: ".$e);
        }
    }

?>