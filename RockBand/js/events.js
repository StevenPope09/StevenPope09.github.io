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









