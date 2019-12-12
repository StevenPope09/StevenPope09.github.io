<?php

class register extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){

        $data = array();
        
        $data["pagename"] = "register";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");
        
        $random = substr( md5(rand()), 0, 7);
        $data["cap"]=$random;
        
        $this->parent->getView("header",$data);
        $this->parent->getView("registerForm",$data);
        $this->parent->getView("footer");
        
        }

    // public function index(){
        
        
    //     $data = array();
    //     $data["pagename"] = "register";
    //     $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");


    //     $this->parent->getView("header",$data);
    //     $this->parent->getView("registerForm");
    //     $this->parent->getView("footer");
    // }

    public function registerConfirmed(){
        $data = array();
        $data["pagename"] = "register";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");


        $this->parent->getView("header",$data);
        $this->parent->getView("registerConfirm");
        $this->parent->getView("footer");
    }

    public function registerAction(){
        //var_dump($_POST);

        $err = array();

        if(!@$_POST["usercatpcha"] || $_POST["usercatpcha"]!=$_SESSION["captcha"]){
            array_push($err,"Captcha Incorrect");
            }

         if(empty($_POST["firstName"]) || $_POST["firstName"] == ""){
            array_push($err,"First name does not exist or is blank.");
            
        }
        else{
            if(!preg_match("/^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/", $_POST["firstName"])){

                array_push($err, "Incorrect input.");
            }
            
        }

        if(empty($_POST["lastName"]) || $_POST["lastName"] == ""){
            array_push($err,"Last Name does not exist or is blank.");
            
        }
        else{
            if(!preg_match("/^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/", $_POST["lastName"])){

                array_push($err, "Incorrect input.");
            }
            
        }

        // if(!isset($_POST["gender"])){
        //     array_push($err,"Gender does not exist or is blank.");
            
        // }
        

        if(!isset($_POST["years"])){
            array_push($err,"Years does not exist or is blank.");
            
        }

        if(empty($_POST["textArea"]) || $_POST["textArea"] == ""){
            array_push($err,"Favorite Subjects does not exist or is blank.");
            
        }

        if(empty($_POST["email"]) || $_POST["email"] == ""){
            array_push($err,"Email does not exist or is blank.");
            
        }
        else{
            if(!preg_match("/^.+@[^\.].*\.[a-z]{2,}$/", $_POST["email"])){

                array_push($err, "Incorrect input.");
            }
            
        }

        if(empty($_POST["password"]) || $_POST["password"] == ""){
            array_push($err,"Password does not exist or is blank.");
            
        }

        if(!isset($_POST["checkBox"])){
            array_push($err,"Be sure to check box before continuing.");
            
        }
        
        
        if (count($err)>0){
            header("location:/register?msg=".implode("&",$err));
        }else{
            header("location:/register/registerConfirmed");
        }
        
    }
    
    
}
?>