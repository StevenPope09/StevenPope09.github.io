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

        $sql = "select * from fruit_table";
        $data["fruit"] = $this->parent->getModel("fruit")->select($sql);

        $this->parent->getView("header",$data);
        $this->parent->getView("crudBody",$data);
        $this->parent->getView("footer");
    }

    public function addForm(){
        $data = array();
        $data["pagename"] = "crud";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");

        $sql = "select * from fruit_table";
        $data["fruit"] = $this->parent->getModel("fruit")->select($sql);

        $this->parent->getView("header",$data);
        $this->parent->getView("addForm");
        $this->parent->getView("footer");
    }

    public function addAction(){

        $sql = "insert into fruit_table (name) values (:name)";

        $data["fruit"] = $this->parent->getModel("fruit")->insert($sql,array(":name"=>$_REQUEST["name"]));

        header("location:/crud");

    }

    public function updateForm(){
       
        $data = array();
        $data["pagename"] = "crud";
        $data["navigation"] = array("welcome"=>"/welcome","about"=>"/about","student info"=>"/studentInfo","register"=>"/register","login"=>"/login");
        $userId = $this->parent->urlPathParts[2];
        
        $sql = "select * from fruit_table where id=".$userId ;
        $data["fruit"] = $this->parent->getModel("fruit")->select($sql);

        $this->parent->getView("header",$data);
        $this->parent->getView("updateForm",$data["fruit"]);
        $this->parent->getView("footer");

        
    }
    public function update(){
       
         $sql = "update fruit_table set name = (:name) where id =".$_REQUEST["id"];
         $data["fruit"] = $this->parent->getModel("fruit")->update($sql,array(":name"=>$_REQUEST["name"]));

         header("location:/crud");
    }

    public function delete(){
        $userId = $this->parent->urlPathParts[2];
        var_dump($userId);
        $sql = "delete from  fruit_table where id =".$userId;
        $data["fruit"] = $this->parent->getModel("fruit")->delete($sql);
        header("location:/crud");
    }

}

?>