/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/rockband.json
*/
var xhr = new XMLHttpRequest();



xhr.onload = function()
{

    //save json data
        var data = JSON.parse(xhr.responseText);

        var blogSection = document.querySelector('#blog');

        if (blogSection)
        {
            var blogTags = "";
            blogTags+= '<h2>'+ "Latest Band News"+'</h2>';
            for (var i = 0; i < 5; i++)
            {
                blogTags+= '<article>';
                blogTags+= '<a href=>'
                blogTags+= '<img src="' + data.news[i].imageURL + '"/>';
                blogTags+= '<h3>' + data.news[i].title + '</h3>';
                blogTags+='</a>'
                blogTags+='<p>' + data.news[i].postDate+'</p>';

                blogTags+= '</article>';
            }
            blogTags+= '<p><a href="news.html">'+"View More"+'</a></p>';
            blogSection.innerHTML = blogTags;
        }

        var liveEvents = document.querySelector('#tourdates');

        if (liveEvents)
        {
            var eventTags = "";
            eventTags += '<h2>' + "Live Events"+ '</h2>';

            eventTags+='<h3>'+"Tour Name"+'<br>'+"Tour 2017"+'</h3>';
            eventTags += '<table>';

            for (var i = 0; i < 4; i++)
            {
                eventTags+='<tr>';
                eventTags+='<td>'+ data.events[i].date+'</td>';
                eventTags+='<td>'+ data.events[i].city//+" "+ data.events[i].state+" "+ data.events[i].venue+'</td>';
                eventTags+='<td>'+ data.events[i].state+'</td>';
                eventTags+='<td>'+ data.events[i].venue+'</td>';
                eventTags+='</tr>'
            }
            eventTags+= '</table>';
            eventTags+= '<p><a href="tourdates.html">'+"View More"+'</a></p>';

            liveEvents.innerHTML = eventTags;
        }

        var aboutSection = document.querySelector('#about');
        if (aboutSection)
        {
            var aboutTags = "";
            aboutTags+='<h2>'+" About The Band"+'</h2>';
            aboutTags+='<h4>'+ data.about.quote+'</h4>';
            aboutTags+='<p>'+ data.about.copy+'</p>';

            for (var i = 0; i <5 ; i++)
            {
                aboutTags+= '<img src="' + data.members[i].imageURL + '"/>';
            }

            aboutSection.innerHTML = aboutTags;
        }

        var blogPage = document.querySelector('#blogPage')
        if (blogPage)
        {
            var blogs = "";
            for (var i = 0; i <data.news.length ; i++)
            {
                blogs+='<article>';
                blogs+='<img src="' + data.news[i].imageURL + '"/>';
                blogs+='<h3>'+ data.news[i].postDate+'</h3>';
                blogs+='<h4>'+data.news[i].title+'</h4>';
                blogs+='<p>'+"Posted by Super User"+'</p>';
                blogs+='<p>'+ data.news[i].text+'</p>';
                blogs+='</article>';
            }
            blogPage.innerHTML = blogs;
        }

};
//call ajax
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true);
xhr.send(null);

