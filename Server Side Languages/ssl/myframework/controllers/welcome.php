<?php

class welcome extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){
        
        $data = array();
        $data["pagename"] = "welcome";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login","api"=>"/api");

        $this->parent->getView("header",$data);
        $this->parent->getView("welcomeBody");
        $this->parent->getView("components");
        $this->parent->getView("footer");
    }
    
}
?>