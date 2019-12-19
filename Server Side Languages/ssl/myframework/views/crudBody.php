<div style="text-align: center; margin: 3em">
    <h3>CRUD Page for Users</h3>
    <img src="../assets/images/winner.webp" class="img-fluid">
</div>
<div class = container>
    <h2 class = "mt-4 mb-3">Crud Page</h2>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        
            <li class="breadcrumb-item">
                <a class="btn btn-danger btn-block" href="/crud/addForm">Add New Fruit</a>
            </li>

        </ol>
    </nav>

    

</div>
<div class="container">
    

    <ul>
    
    <?
        foreach($data["fruit"] as $fruit){
            echo "<li>".$fruit["name"];
            echo "<a href='/crud/delete/".$fruit["id"]."'> Delete </a>";
            echo "| <a href='crud/updateForm/".$fruit["id"]."'>Update</a></li>";
        };
    ?>
</ul>
</div>