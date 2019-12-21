<div style="background-color: #EAF6FF;">
<div>
    <a href="/welcome"><img style="height: 65px; width: 60px;"class="img-thumbnail"src="../assets/images/home.png" alt=""></a>
    <p>Return Home</p>
</div>
    <div style="margin: 3em; background-color:black; color: white; padding: 3%;">
        <h1 style="text-align: center;">Life as a Coding Student!</h1>
    </div>

    <div class="container">

        <div class="starter-template" style="text-align: center; margin-bottom: 3em;">
            <h2>API Data Read In</h2>
            <h3>40 Breeds of Cats Read In From API Data</h3>
        </div>
            <div>
            <ol>
            <?
            
            foreach($data["api"] as $item){
                //echo $item["volumeInfo"]["title"]."<br /> \n";
                echo "<li>".$item->name."</li><br>";
            }
            
            ?>
            </ol>
            
            </div>
            


        
    </div><!-- container -->
</div>