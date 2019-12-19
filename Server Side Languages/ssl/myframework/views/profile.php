<div>
   <h2 style="text-align: center; margin-bottom: 3em;">User Profile Page</h2>
</div>

<div style="text-align: center;">
    <h4 >Profile Picture Form</h4>
    <img class="img-fluid "src="/assets/myimage.jpg">
</div>

<div class="row">
    <div class="col-lg-12">
        <form method="post" action="/profile/updatePicture" enctype="multipart/form-data" style="margin-top: 3em; margin-bottom: 3em;">
           
            <div class="form-group">
                <label for="exampleInputEmail1">Select Picture</label>
                <input name="myFile" type="file" class="form-control form-control-lg" id="myFile" aria-describedby="emailHelp">
            </div>

            <div class="form-group">
                <button class="btn btn-danger btn-block">Upload</button>
            </div>

        </form>
    </div>
</div>


