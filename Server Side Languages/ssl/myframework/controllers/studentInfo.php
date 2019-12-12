<?php

class studentInfo extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){
        
        $data = array();
        $data["pagename"] = "studentInfo";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","studentInfo"=>"/studentInfo","register"=>"/register","login"=>"/login");

        $this->parent->getView("header",$data);
        $this->parent->getView("SIbody");
        $this->parent->getView("footer");
    }
    
}
?>