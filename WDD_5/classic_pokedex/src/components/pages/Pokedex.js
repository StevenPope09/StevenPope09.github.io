import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pokemon from '../Pokemon'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        //maxWidth: 900,
        marginRight: 25,
        
    },
    
    
}));

export default function UserProfile() {
    const classes = useStyles();

    let [pokeName, setPokeName] = useState("");
    let [pokeId, setPokeId] = useState("");
    let [pokeImg, setPokeImg] = useState("");
    let [pokeType, setPokeType] = useState("");
    let [pokemonArray, setPokemonArray] = useState([]);

    let key = []

    

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw res
            }
        })

        .then(pokeData => {
            //console.log(pokeData.results.length);
            for(let i=0; i<pokeData.results.length; i++){
                key[i] = pokeData.results[i].name
            }
            
            //console.log(key);
        })
        .catch(error => {
            console.log(error);
        });
    

    function loadPokemon(pKey) {

        fetch(`https://pokeapi.co/api/v2/pokemon/${pKey}`)
            .then(response => {
                if (response.ok) {
                    return response.json();


                } else {
                    throw response;
                }
            })

            .then(data => {
                let type = []
                if(data.types.length > 1){
                    type = [data.types[0].type.name,"/", data.types[1].type.name]
                } else {
                    type = [data.types[0].type.name]
                }
                let pokeObj = {
                    name: data.name,
                    id: data.id,
                    img: data.sprites.front_default,
                    type: type
                    
                }
                let tempArr = [...pokemonArray, pokeObj]
                setPokemonArray(tempArr)

                console.log("Temp Array", tempArr);

                setPokeName(pokeObj.name);


                setPokeId(pokeObj.id);


                setPokeImg(pokeObj.img);


                setPokeType(pokeObj.type);


                



            })
            .catch(err => {
                console.log(err);
            });

    }




    return (
        <div className={styles.root}>
            <div style={styles.topBar}>Pokedex</div>
            
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => {loadPokemon(key[136])}}>Load Pokemon</Button>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <div style={styles.form}>
                
                        {pokemonArray.map((item, key) => {
                            return <Pokemon key={key} poke={item} />
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

const styles = {
    topBar: {
        padding: "10px",
        backgroundColor: "#ebebeb",
        display: "flex",
        border: "1px solid black",
        marginTop: "10px"
    },
    userAvatarAndName: {
        display: "flex",
        padding: "30px"
    },
    subtitle: {
        fontSize: "10px",
        textAlign: "left"
    },
    username: {
        textAlign: "left"
    },
    usernameAndSubtitle: {
        marginLeft: "10px",
        paddingTop: "5px",
        marginBottom: '15px'
    },
    input: {
        marginLeft: "10px",
        fontSize: '.75em',
        marginBottom: '15px'
    },
    container: {
        paddingLeft: '20%'

    },
    buttonRow: {
        display: "flex",
        justifyContent: "center",
        marginLeft: '3%',
        marginTop: '3%'
    },
    form: {
        fontSize: '1.5em',
        
        
    },
    pokeImage: {
        height: '100px',
        width: '75px'
    },
    

}