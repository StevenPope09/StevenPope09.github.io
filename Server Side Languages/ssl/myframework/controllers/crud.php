<?

class crud extends AppController{

public function __construct($parent){
    $this->parent = $parent;

    if(!@$_SESSION["isLoggedin"] || @$_SESSION["isLoggedin"] != "1"){

        header("location:/login?msg=Not Allowed");

    }

}
public function index(){
        
        
    $data = array();
    $data["pagename"] = "crud";
    $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");


    $this->parent->getView("header",$data);
    $this->parent->getView("welcomeBody");
    $this->parent->getView("crudBody");
    $this->parent->getView("components");
    $this->parent->getView("footer");
}

}

?>