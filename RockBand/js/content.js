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
            blogTags+= '<h2>'+ "Latest"+'<strong> Band News</strong></h2>';
            for (var i = 0; i < 5; i++)
            {
                blogTags+= '<article>';
                blogTags+= '<a href=>';
                blogTags+= '<img src="' + data.news[i].imageURL + '"/>';
                blogTags+= '<h3>' + data.news[i].title + '</h3>';
                blogTags+='</a>';
                blogTags+='<p>' + data.news[i].postDate+'</p>';
                blogTags+= '</article>';
            }
            blogTags+= '<p><a href="news.html"><button>'+"View More"+'</button></a></p>';
            blogSection.innerHTML = blogTags;
        }

        var liveEvents= document.querySelector('#tourdates table');
        if (liveEvents)
        {
            var eventTags = "";

            for (var i = 0; i < 4; i++)
            {
                eventTags+='<tr>';
                eventTags+='<td>'+ data.events[i].date+'</td>';
                eventTags+='<td>'+ data.events[i].city+'</td>';
                eventTags+='<td>'+ data.events[i].state+'</td>';
                eventTags+='<td>'+ data.events[i].venue+'</td>';
                eventTags+='<td id="location"><a href="'+data.events[i].locationURL+'">'+"Location"+'</a></td>';
                eventTags+='<td id="tickets"><a href="'+data.events[i].ticketsURL+'">'+"Tickets"+'</a></td>';
                eventTags+='</tr>';
            }


            liveEvents.innerHTML = eventTags;
        }

        var aboutSection = document.querySelector('#about');
        if (aboutSection)
        {
            var aboutTags = "";
            aboutTags+='<h2>'+" About"+'<strong> The Band</strong></h2>';
            aboutTags+='<h4>'+ data.about.quote+'</h4>';
            aboutTags+='<p>'+ data.about.copy+'</p>';

            for (var i = 0; i <5 ; i++)
            {
                aboutTags+= '<img src="' + data.members[i].imageURL + '"/>';
            }
            aboutTags+='<p><a href="about.html"><button>'+"Read More"+'</button></a></p>';
            aboutSection.innerHTML = aboutTags;
        }

        var blogPage = document.querySelector('#blogPage');
        if (blogPage)
        {
            var blogs = "";
            blogs+='<h2>'+"Blog"+'</h2>';
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

        var teamPage = document.querySelector('#team ul');
        if (teamPage)
        {
            var members = "";

            for (var i = 0; i < data.members.length; i++)
            {
                members+='<li>';
                members+='<img src="' + data.members[i].imageURL + '"/>';
                members+='<h3>'+ data.members[i].firstname+" "+ data.members[i].lastname+'</h3>';
                members+='<p>'+data.members[i].instrument+'</p>';
                members+='<p><button><a href=""></button>'+"Read More"+'</a></p>';
                members+='</li>';
            }
            teamPage.innerHTML= members;
        }

        var tourDates = document.querySelector('#tours ul');
        if (tourDates)
        {
            var tours="";

            for (var i = 0; i <data.events.length; i++)
            {
                tours+='<li>';
                tours+='<h3>'+ "Lorem Ipsum 2017"+'</h3>';
                tours+='<p>'+ data.events[i].date + '</p>';
                tours+='<p>'+ data.events[i].city + " "+ data.events[i].state+'</p>';
                tours+='<p>'+ data.events[i].venue+'</p>';
                tours+='<button><a href="'+data.events[i].locationURL+'">'+"View Directions"+'</a></button>';
                tours+='<button><a href="'+data.events[i].ticketsURL+'">'+"Buy Tickets"+'</a></button>';
                tours+='</li>';
            }
            tourDates.innerHTML = tours;
        }

};
//call ajax
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true);
xhr.send(null);

