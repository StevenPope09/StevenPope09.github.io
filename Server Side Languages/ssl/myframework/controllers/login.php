<?php

class login extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){
        
        
        $data = array();
        $data["pagename"] = "login";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");


        $this->parent->getView("header",$data);
        $this->parent->getView("loginForms");
        $this->parent->getView("footer");
    }

    public function recv()
    {
        if($_POST["type"]=="form"){
            $this->recvForm();
        }else{
            $this->recvAjax();
        }
    }
    
    public function recvForm(){
        $_SESSION["cap"]= "";
        
        if($_POST["email"]== "test@test.com" && $_POST["password"]== "0000"){
            
            $_SESSION["isLoggedin"] = "1";
            $_SESSION["userEmail"] = $_POST["email"];
            header("location:/crud");
        }else{
            $_SESSION["isLoggedin"] = "0";
            $_SESSION["userEmail"] = "";
            header("location:/login?msg=Invalid User");
        }
        

        
    }

    // public function recvAjax(){
        
    //     if($_POST["email"]== "test@test.com" && $_POST["password"]== "1234"){
    //         echo "good";
    //     }else{
    //         echo "bad";
    //     }
    // }
    
    
}
?>