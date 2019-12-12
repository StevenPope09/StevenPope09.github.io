<?

class logout extends AppController{

    public function __construct(){
        $_SESSION["isLoggedin"] = "0";
        session_destroy();
        header("location:login");
    }

}

?>