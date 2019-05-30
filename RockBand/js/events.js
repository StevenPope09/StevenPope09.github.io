/*
 * events.js
 * 
*/
function readMore(event){
    var target = event.target;
    var parent = target.parentElement;
    if (target){
        var test = '';
        test+='<p>'+ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac."+ '</p>';
        test+='<p><button class="readless">'+"Read Less"+'</button>';
        target.insertAdjacentHTML('afterend',test);
        parent.removeChild(parent.querySelector('#team button'));
    }

}

function readLess(event) {
    var target = event.target;
    var parent = target.parentElement;
    if (target) {
        var test = '';
        parent.removeChild(parent.querySelector('#team button'));
        parent.removeChild(parent.querySelector('#team p'));
        test+='<p><button class="link">'+"Read More"+'</button>';
        target.insertAdjacentHTML('beforerend',test);
    }
}

function teamInfo() {
    var moreInfo = document.querySelectorAll('#team button');
    for (var i = 0; i < moreInfo.length ; i++) {
        moreInfo[i].addEventListener('click', readMore);
    }
}
if () {
    var lessInfo = document.querySelectorAll('#team .readless');

    for (var i = 0; i < lessinfo.length; i++) {
        lessInfo[i].addEventListener('click', readLess)
    }
}







