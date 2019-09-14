const apiUrlBase = 'https://pokeapi.co/api/v2/pokemon/'
key = 1
const completeUrl = `${apiUrlBase}${key}`

//console.log(completeUrl);

fetch(completeUrl)
    .then(response => {
        if (response.ok) {
            return response.json();


        } else {
            throw response;
        }
    })

    .then(data => {
        

         //console.log(data.results[0].url);
        apiTest = document.querySelector('#apiTest')
        // console.log(data.id);
        // console.log(data.name);
        // console.log(data.sprites.front_default);
        // console.log(data.weight);
        if (apiTest) {
            let pokemonInfo = ''
            pokemonInfo += '<div>'
            pokemonInfo += '<h2>' + data.name + '</h2>'
            pokemonInfo += '<p>' + data.id + '</p>'
            pokemonInfo += '<img src="' + data.sprites.front_default + '"/>'
            pokemonInfo += '<p>' + data.types[0].type.name + '</p>'
            pokemonInfo += '<p>' + data.types[1].type.name + '</p>'
            pokemonInfo += '</div>'

            apiTest.innerHTML = pokemonInfo;

        //     key++
        //     console.log(key);
         }
    })
    .catch(err => {
        console.log(err);
    });

