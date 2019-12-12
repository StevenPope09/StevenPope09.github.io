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

            <?

                function create_image($cap)

                {

                //unlink("./assets/image1.png");

                global $image;

                $image = imagecreatetruecolor(200, 50) or die("Cannot Initialize new GD image stream");

                $background_color = imagecolorallocate($image, 255, 255, 255);

                $text_color = imagecolorallocate($image, 0, 255, 255);

                $line_color = imagecolorallocate($image, 64, 64, 64);

                $pixel_color = imagecolorallocate($image, 0, 0, 255);

                imagefilledrectangle($image, 0, 0, 200, 50, $background_color);

                for ($i = 0; $i < 3; $i++) {

                imageline($image, 0, rand() % 50, 200, rand() % 50, $line_color);

                }

                for ($i = 0; $i < 1000; $i++) {

                imagesetpixel($image, rand() % 200, rand() % 50, $pixel_color);

                }

                $text_color = imagecolorallocate($image, 0, 0, 0);

                ImageString($image, 22, 30, 22, $cap, $text_color);

                $_SESSION["captcha"] = $cap;
                //var_dump($_SESSION["captcha"]);

                imagepng($image, "./assets/image1.png");

                }

                create_image($data["cap"]);

                echo "<img src='/assets/image1.png'>";



            ?>

            <div class="form-group input-group">
                <div class="input-group-prepend">                
                <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>

                <input name="usercatpcha" type="text" class="form-control" placeholder="captcha">

            </div> 

            <input type="submit" class="btn btn-danger btn-block" value="Submit">

        </form>
    </div>
</div>