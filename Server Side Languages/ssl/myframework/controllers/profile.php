<?php

class profile extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
        if(!@$_SESSION["isLoggedin"] || @$_SESSION["isLoggedin"] != "1"){

            header("location:/login?msg=Not Allowed");
    
        }
    }

    public function index(){
        
        
        $data = array();
        $data["pagename"] = "profile";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login","api"=>"/api");
        
        //var_dump(file_get_contents("./assets/note.xml"));

        // $file = "./assets/note.xml";
        // $h = fopen($file,"r");
        // $content = fread($h, filesize($file));
        // var_dump($content);
        // fclose($h);



        
        $this->parent->getView("header",$data);
        $this->parent->getView("profile");
        $this->parent->getView("footer");
    }

    public function updatePicture(){
        
        if($_FILES["myFile"]["type"]== "image/jpg" || $_FILES["myFile"]["type"]== "image/jpeg" ){
            
            if(move_uploaded_file($_FILES["myFile"]["tmp_name"], "./assets/myimage.jpg")){

                header("location:/profile");

            }else{

                header("location:/profile?msg= Issue uploading file.");

            }

        }else{
            header("location:/profile?msg= Not a valid File Type");
        }
    }
    
}
?>