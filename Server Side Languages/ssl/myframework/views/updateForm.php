<div style="text-align: center; margin: 3em">
    <h3>USER ONLY PAGE</h3>
    
</div>
<div class = container>
    <h2 class = "mt-4 mb-3">Update Fruit Name Here</h2>

    <div class="row">
    
        
        <div class="col-lg-12">
            <form action="/crud/update" method="post">
            <div class="form-group">
                <label for="id">Fruit ID</label>
                <input class="form-control" value="<?echo $data[0]["id"];?>" type="text" name="id" readonly>
            </div>
            <div class="form-group">
                <label for="name">Fruit Name</label>
                <input class="form-control" value="<?echo $data[0]["name"];?>" type="text" name="name">
            </div>
            <div class="form-group">
                <input class="btn btn-danger btn-block" type="submit">
            </div>
            

            
            </form>
        
        </div>
    
    </div>

</div>