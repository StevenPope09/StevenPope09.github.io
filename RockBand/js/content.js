/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/rockband.json
*/
var xhr = new XMLHttpRequest();

var tags = "";

xhr.onload = function()
{


    if (xhr.status === 200)
    {
    //save json data
        var data = JSON.parse(xhr.responseText);
        console.log(data);



        tags+= '<ul>';
        for (var i = 0; i < data.news.length; i++)
        {
            tags+= '<li>';
            tags+= '<img src="' + data.news[i].imageURL + '"/>';
            tags+= '<h3>' + data.news[i].title + '</h3>';
            tags+='<p>' + data.news[i].postDate+'</p>'
        }
        tags+= '</ul>';

        var content = document.querySelector('#blog');
        content.innerHTML = tags;
    }
};
//call ajax
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true);
xhr.send(null);

