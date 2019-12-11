<div class="row">

    <div class="col-lg-12">

        <form method="post" action="/register/registerAction" style="margin-top: 3em; margin-bottom: 3em;">
            <div>
                <h2 style="text-align: center; margin-bottom: 3em;">New User Register Form</h2>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input name="firstName" type="text" class="form-control form-control-lg" id="firstName" aria-describedby="firstName">

            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input name="lastName" type="text" class="form-control form-control-lg" id="lastName" aria-describedby="lastName">

            </div>
            <div style = "margin-bottom: 15px;">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radios1" value="option1" checked name="gender">
                    <label class="form-check-label" for="exampleRadios1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radios2" value="option2" name="gender">
                    <label class="form-check-label" for="exampleRadios2">
                        Female
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radios3" value="option1" name="gender">
                    <label class="form-check-label" for="exampleRadios1">
                        Prefer not to say
                    </label>
                </div>
            </div>
            

            <div class="form-group">
                <label for="formControlSelect">Years in School</label>
                <select class="form-control form-control-lg" id="formControlSelect" name="years">
                <option>0</option>
                <option>Less Than 1</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>More Than 4</option>
                </select>
            </div>

            <div class="form-group">
                <label for="textarea">Favorite Subject(s)</label>
                <textarea class="form-control form-control-lg" id="textarea" name="textArea" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" name="password">
            </div>

            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="check" name="checkBox">
                <label class="form-check-label" for="check">Check to ensure you're human</label>
            </div>

            <input type="submit" class="btn btn-danger btn-block" value="Submit">

        </form>
    </div>
</div>