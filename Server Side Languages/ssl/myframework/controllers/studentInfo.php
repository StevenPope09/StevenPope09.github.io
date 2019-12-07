<?php

class studentInfo extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){
        
        $data = array();
        $data["pagename"] = "student info";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo");

        $this->parent->getView("header",$data);
        $this->parent->getView("SIbody");
        $this->parent->getView("footer");
    }
    
}
?>