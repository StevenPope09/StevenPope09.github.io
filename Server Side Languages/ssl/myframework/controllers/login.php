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

        $file = "./assets/users.txt";
        $h = fopen($file,"r");
        $content = fread($h,filesize($file));
       
        $users = explode(PHP_EOL, $content);
        $user1 = explode("|", $users[0]);
        $user2 = explode("|", $users[1]);
        
        if($_POST["email"]== $user1[0] && $_POST["password"]== $user1[1]){
            
            $_SESSION["isLoggedin"] = "1";
            $_SESSION["userEmail"] = $_POST["email"];
            $_SESSION["user1"] = $user1;
            header("location:/crud");
            fclose($h);
        }
        else if($_POST["email"]== $user2[0] && $_POST["password"]== $user2[1]){
            $_SESSION["isLoggedin"] = "1";
            $_SESSION["userEmail"] = $_POST["email"];
            $_SESSION["user2"] = $user2;
            header("location:/crud");
        }
        else{
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