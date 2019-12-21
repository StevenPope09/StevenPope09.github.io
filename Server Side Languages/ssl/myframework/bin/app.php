<?php

include  'appcontroller.php';
//require_once './google-api-php-client/src/Google/autoload.php';

class App{

    public function __construct($config)
    {

        $this->config = $config;


    }

    public function startApp($params){

        $AppController = new AppController($params,$this->config);




    }
}



?>