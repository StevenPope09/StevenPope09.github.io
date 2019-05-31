/*
 * events.js
 * 
*/
    function readMore(event) {
        var target = event.target;
        var parent = target.parentElement;
         if (!parent.querySelector('#moreInfo')) {
             var addedInfo = '';
             addedInfo += '<div id="moreInfo">';
             addedInfo += '<p>' + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                 "tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac." + '</p>';
             addedInfo += '</div>';

             target.insertAdjacentHTML('beforebegin', addedInfo);

             target.innerHTML = "Read Less";
         }
         else{
             parent.removeChild(parent.querySelector('#moreInfo'));
             target.innerHTML="Read More";
         }
    }

    function teamInfo() {
        var moreInfo = document.querySelectorAll('#team button');
        for (var i = 0; i < moreInfo.length; i++) {
            moreInfo[i].addEventListener('click', readMore);
        }
    }


    function moreNews(event){
        var target = event.target;
        var parent = target.parentElement;

        if (!parent.querySelector('#moreStories')){
            var blog = "";
            blog+='<div class="wrapper" id="moreStories">';
            
            for (var i = 0; i < 5 ; i++)
            {
                blog+='<article>';
                blog+='<h3>'+"Lorem Ipsum" +'</h3>';
                blog+='<h4>'+"2016/01/01"+'</h4>';
                blog+='<p>'+"Posted by Super User"+'</p>';
                blog+='<img src="images/drums.jpg"/>';
                blog+='<p>'+ "Story goes here"+'</p>';
                blog+='</article>';
            }
            blog+='</div>';

            target.insertAdjacentHTML('beforebegin', blog);
            target.innerHTML = "Read Less";
        }
        else{
            parent.removeChild(parent.querySelector('#moreStories'));
            target.innerHTML="View More";
        }
    }


function moreBlog() {
    var moreBlogs = document.querySelector('#blogPage button');
    console.log(moreBlogs);
    moreBlogs.addEventListener('click', moreNews);
}


