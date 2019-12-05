<!DOCTYPE html>
<html>
    <head>
        <meta charset = "UTF-8">
        
    </head>
    <div class="navigation" style="color: black; background: pink; text-align: center; padding: 2em;">

        <?php
        //var_dump($data["navigation"]);

        foreach($data["navigation"] as $key=>$link){
            echo "<a href='".$link."'>".strtoupper($key)."</a> | ";
        }
        ?>
        <h1>About Page</h1>
    </div>
    
    <div style="background: black; color: white; padding: 3em; margin-top: 10px;">
        <h2>Header View</h2>
    </div>  