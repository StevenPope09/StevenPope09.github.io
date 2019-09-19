import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Pokemon from '../Pokemon';
import Search from '../Search'
import { Container } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        //maxWidth: 900,
        marginRight: 25,

    },


}));

export default function Pokedex(props) {
    const classes = useStyles();

    let [masterPokemonArray, setMasterPokemonArray] = useState([]); // current page of pokemon
    let [search, setSearch] = useState("")
    let [next, setNext] = useState("")

    // pass in array of pokemon index objects
    // return an array of pokemon detail objects
    async function getPokemonDetails(indexObjects) {
        let pokemonArr = [];

        for (let result of indexObjects) {
            let { url } = result;
            let pokemonRes = await fetch(url);
            let pokemonJson = await pokemonRes.json();
            pokemonArr.push(pokemonJson);

        }

        return pokemonArr;
    }

    useEffect(() => {

        init();
        async function init() {

            let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
            let json = await res.json();
            let { next } = json;
            setNext(next);
            let pokemonArr = await getPokemonDetails(json.results)
            setMasterPokemonArray(pokemonArr);
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



            <div style={styles.backDrop}>
                <Container>
                    <div style={styles.topBar}><h1>Pokedex</h1></div>
                </Container>
                <Container>
                    <div>
                        <Search searchPoke={(e) => {
                            e.preventDefault()
                            let key = search.value;
                            setSearch(key)
                        }} />
                    </div>
                    <div className="pokemonList">
                        {masterPokemonArray.map((pokemon) => {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} disableAdd={false} />
                        })}
                    </div>
                    <div style={styles.buttonDiv}>
                        <Button style={styles.loadButton} variant="contained" onClick={onLoadMore}>Load more</Button>
                    </div>

                </Container>
            </div>


        </div>
    );
}

const styles = {
    topBar: {
        padding: "10px",

        display: "flex",
        //border: "1px solid black",
        marginTop: "10px",
        justifyContent: 'center',
        color: 'white'
    },
    backDrop: {
        backgroundColor: '#1C3144',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '2%'

    },
    loadMore: {

    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2%',
        marginTop: '2%'
    },
    loadButton: {
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#FF0000',
        color: 'white'
    }


}