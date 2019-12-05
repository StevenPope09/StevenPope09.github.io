<?php

class welcome extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){
        
        $data = array();
        $data["pagename"] = "about";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about");

        $this->parent->getView("header",$data);
        $this->parent->getView("body");
        $this->parent->getView("footer");
    }
    
}
?>