<div>
   <h2 style="text-align: center; margin-bottom: 3em;">User Login Page</h2>
</div>

<div class="row">


    <div class="col-lg-12">

    

        <form method="post" action="/login/recv" style="margin-top: 3em; margin-bottom: 3em;">
            <input type="hidden" name="type" value = "form">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password"type="password" class="form-control form-control-lg" id="password">
            </div>

            

            <button class="btn btn-danger btn-block">Login</button>

        </form>
    </div>
</div>

<!-- <div class="row">


    <div class="col-lg-12">

        <form method="post" action="/login/recv" style="margin-top: 3em; margin-bottom: 3em;">

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password"type="password" class="form-control form-control-lg" id="password">
            </div>

            <a href="javascript:void(0)" class="btn btn-danger btn-block"onclick="ASubmit()">Login</a>

        </form>
    </div>
</div> -->