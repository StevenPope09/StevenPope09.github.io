<?
class api extends AppController{

    public function __construct($parent){
        $this->parent=$parent;

        //var_dump($this->parent);
    }

    public function index(){

        $data = array();
        $data["pagename"] = "api";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login","api"=>"/api");
        $data["api"] = $this->parent->getModel("apiModel")->catApi();

        
        $this->getView("api",$data);
        $this->getView("footer");
    }




}

?>