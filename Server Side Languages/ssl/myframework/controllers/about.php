<?php

class about extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){
        
        
        $data = array();
        $data["pagename"] = "about";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");
        $this->parent->getView("header",$data);
        $this->parent->getView("aboutBody");
        $this->parent->getView("footer");
    }
    
}
?>