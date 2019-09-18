import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pokemon from '../Pokemon';
import Search from '../Search'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        //maxWidth: 900,
        marginRight: 25,

    },


}));

export default function UserProfile(props) {
    const classes = useStyles();

    let [masterPokemonArray, setMasterPokemonArray] = useState([]); // current page of pokemen
    let [search, setSearch] = useState("")
    let [next, setNext] = useState("")

    // pass in array of pokemon index objects
    // return an array of pokemon detail objects
    async function getPokemonDetails(indexObjects) {
        let pokemonArr = [];

        for (let result of indexObjects) {
            let { url } = result;
            let pokemenRes = await fetch(url);
            let pokemenJson = await pokemenRes.json();
            pokemonArr.push(pokemenJson);

        }

        return pokemonArr;
    }

    useEffect(() => {

        init();
        async function init() {

            let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
            let json = await res.json();
            let { next } = json;
            setNext(next);
            let pokemenArr = await getPokemonDetails(json.results)
            setMasterPokemonArray(pokemenArr);
        }

    }, []) // == componentDidMount

    async function onLoadMore() {
        // console.log('load more');
        let res = await fetch(next);
        let json = await res.json();
         setNext(json.next);
        let pokemonArr = await getPokemonDetails(json.results);
        let newPokemonArr = [...masterPokemonArray, ...pokemonArr];
        setMasterPokemonArray(newPokemonArr);
    }


    return (
        <div className={styles.root}>
            <Search searchPoke={(e) => {
                e.preventDefault()
                let key = search.value;
                setSearch(key)
            }} />
            <div style={styles.topBar}>Pokedex</div>

            <div style={styles.pokemonList}>
                {masterPokemonArray.map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />
                })}
            </div>

            <Button variant="contained" color="primary" onClick={onLoadMore}>Load more</Button>
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
    pokemonList: {
        fontSize: '1.5em',
        display: "flex",
        flexWrap: 'wrap',
    },
    pokeImage: {
        height: '100px',
        width: '75px'
    },


}