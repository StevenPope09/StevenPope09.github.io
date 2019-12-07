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
            <?
                foreach($data["navigation"] as $key=>$link){
                  if($data["pagename"] == $key){

            ?>
                <li class="nav-item active">
                  <a class="nav-link" href="<?=$link?>"><?=strtoupper($key)?></a>
                </li>
            <?  
                  }
            
            else {
              ?>
              <li>
                <a class="nav-link" href="<?=$link?>"><?=strtoupper($key)?></a>
              </li> 
            <? 
            }
          }
            ?>
        </ul>
      </div>
    </nav>  
    <div style="margin: 3em; background-color:black; color: white; padding: 3%;">
      <h1 style="text-align: center;">Life as a Coding Student!</h1>
    </div>
          

    <div class="container">
            
