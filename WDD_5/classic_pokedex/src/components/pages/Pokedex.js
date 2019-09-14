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
    let [pokeType1, setPokeType1] = useState("");
    let [pokeType2, setPokeType2] = useState("");
    let [pokemonArray, setPokemonArray] = useState([]);

    let key = 1;

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

                let pokeObj = {
                    name : data.name,
                    id : data.id,
                    img : data.sprites.front_default,
                    type1 : data.types[0].type.name,
                    type2 : data.types[1].type.name
//make poke types an array
                }    
                let tempArr = [...pokemonArray,pokeObj]
                setPokemonArray(tempArr)
                
                console.log("Temp Array",tempArr);
                
                setPokeName(pokeObj.name);

                
                setPokeId(pokeObj.id);

                
                setPokeImg(pokeObj.img);

                
                setPokeType1(pokeObj.type1);

                
                setPokeType2(pokeObj.type2);

                

            })
            .catch(err => {
                console.log(err);
            });

    }




    return (
        <div className={classes.root}>
            <div style={styles.topBar}>Pokedex</div>
            <div style={styles.form}>
                <button onClick={()=>{loadPokemon(1)}}>Load Pokemon</button>
                
                    {pokemonArray.map((item,key)=>{
                    return <Pokemon key={key} poke={item}/>
                })}
                
                
                
                <Grid container spacing={3} style={styles.container}>
                    <Grid item xs={3}>
                        <h3>Pokemon Name</h3>
                        <p style={styles.input}>{pokeName}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>Pokemon ID</h3>
                        <p style={styles.input}>{pokeId}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>Type</h3>
                        <p style={styles.input}>{pokeType1} {pokeType2}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>Picture</h3>
                        <img src={pokeImg} style={styles.pokeImg} onChange={(e) => {
                            setPokeImg(e.target.value);
                        }} />
                    </Grid>

                    {/* <Grid item xs={8} style={styles.buttonRow}>
                        <Button variant="contained" component="span" color="primary" onClick={loadPokemon()}>
                            Load Pokemon
                        </Button>
                    </Grid> */}
                </Grid>
            </div>
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
        fontSize: '1.5em'
    },
    pokeImage: {
        height: '100px',
        width: '75px'
    }

}