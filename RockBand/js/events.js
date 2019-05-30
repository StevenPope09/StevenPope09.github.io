/*
 * events.js
 * 
*/
    function readMore(event) {
        var target = event.target;
        var parent = target.parentElement;
        if (target) {
            var addedInfo = '';
            addedInfo += '<div id="moreInfo">';
            addedInfo += '<p>' + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac." + '</p>';
            addedInfo += '<p><button class="readless">' + "Read Less" + '</button>';
            addedInfo += '</div>';

            target.insertAdjacentHTML('afterend', addedInfo);
            
            parent.removeChild(parent.querySelector('#team button'));

            var lessInfo = document.querySelectorAll('#team .readless');
            console.log(lessInfo);
            for (var i = 0; i < lessInfo.length; i++) {
                lessInfo[i].addEventListener('click', readLess)
            }
        }
    }

    function readLess() {
        var less = document.querySelectorAll('#team #moreInfo');
        for (var i = 0; i < less.length; i++) {
            var test = '';
            test += '<p><button class="link">' + "Read More" + '</button>';
            less[i].innerHTML = test;
            teamInfo();
        }
    }

    function teamInfo() {
        var moreInfo = document.querySelectorAll('#team button');
        for (var i = 0; i < moreInfo.length; i++) {
            moreInfo[i].addEventListener('click', readMore);
        }
    }









