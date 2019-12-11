
</div>
<footer style="background: black; color: white; padding: 3em; margin-top: 40px;">
  <div style="text-align: center;">  
    <p>Developed by Steven Pope.</p>
    <p>Full Sail University Student</p>
    <p>©2019</p>
  </div>
</footer>
</main>
<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script> -->
    <script src="https://code.jquery.com/jquery-3.4.1.js"integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    
    <script>
      function ASubmit(){
        let passwordF = $("#password").val()
        let emailF = $("#email").val()
        let typeF = "ajax"
        $.ajax({

          method: "POST",
          url: "login/recv",
          data: {email: emailF, password: passwordF, type: typeF },
          success:function(data){
              if(data == "good"){
                window.document.location.href="/login?msg=Successful Login! Enjoy the site!"
              }else{
                window.document.location.href="/login?msg=Wrong User Name or Password"
              }
          }


        })

      }
    </script>

    <script>
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
    </script>
    
  </body>

</html>