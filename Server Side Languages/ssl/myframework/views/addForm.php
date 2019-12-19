<div style="text-align: center; margin: 3em">
    <h3>USER ONLY PAGE</h3>
    <img src="../assets/images/winner.webp" class="img-fluid">
</div>
<div class = container>
    <h2 class = "mt-4 mb-3">Crud Page
    <small>Subheading</small></h2>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            
            <li class="breadcrumb-item">
                <a class="btn btn-danger btn-block" href="/crud/addForm">Add New User</a>
            </li>

        </ol>
    </nav>

    <div class="row">

        <div class="col-lg-12">
            <form action="/crud/addAction" method="post">
            <div class="form-group">
                <input class="form-control" placeholder="Fruit Name" type="text" name="name">
            </div>
            
            <div class="form-group">
                <input class="btn btn-danger btn-block" type="submit">
            </div>
            

            
            </form>
        
        </div>
    
    </div>

</div>