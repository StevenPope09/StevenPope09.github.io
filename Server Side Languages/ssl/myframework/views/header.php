<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    <title>Hello, world!</title>
  </head>
  <body>
    
    <main style="background-color: #EAF6FF;">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <?foreach($data["navigation"]as $key=>$link){?>
            <li class="nav-item">
            <?if($key=="login"&& @$_SESSION["isLoggedin"]&& @$_SESSION["isLoggedin"]==1){?>
            <a class=nav-link href="/crud" style="<?=$this->urlPathParts[0]=="crud"?"color:white":""?>">CRUD</a>
            </li>
            <li>
              <a class=nav-link href="/profile" style="<?=$this->urlPathParts[0]=="profile"?"color:white":""?>">PROFILE</a>
            </li>
            
            <li class="nav-item"><a class=nav-link href="/logout" >LOGOUT</a>
            <?}else{?>
            <a class="nav-link" href="<?=$link?>"
            <?
            if($this->urlPathParts[0]==$key){
              echo "style='color:white'>";
            }else{
              echo " >";
            }
            ?>
            <?=strtoupper($key)?></a>
            <?}?>
            </li>
            <?
            }
            ?>
        </ul>
      </div>
    </nav>  
    <div style="margin: 3em; background-color:black; color: white; padding: 3%;">
      <h1 style="text-align: center;">Life as a Coding Student!</h1>
    </div>
          

    <div class="container">


    <div class="modal" tabindex="-1" role="dialog" id="mymodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">MESSAGE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><?echo @$_GET["msg"]?></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>  
          </div>
        </div>
      </div>
    </div>
    <?
      if(@$_GET["msg"] || @$_GET["msg"] != ""){
    ?>
    <script type="text/javascript">setTimeout(function(){$("#mymodal").modal()},500);</script>
      <?}?>     
