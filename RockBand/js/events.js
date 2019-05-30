/*
 * events.js
 * 
*/
function readMore(event){
    var target = event.target;
    var parent = target.parentElement;
    var test = '';
    test+='<p>'+"this is test text"+ '</p>';
    test+='<p><button class="link">'+"Read Less"+'</button>';

    target.insertAdjacentHTML('afterend',test);

}
function teamInfo() {
    var moreInfo = document.querySelectorAll('#team button');

    console.log(moreInfo);

    for (var i = 0; i < moreInfo.length ; i++) {
        moreInfo[i].addEventListener('click', readMore);
    }

}





