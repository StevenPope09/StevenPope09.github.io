import React, { Component, useEffect, useState } from 'react'
import Pokemon from '../Pokemon';
import { Container } from 'react-bootstrap';
import Search from '../Search'


export default function Collection(props) {

    let [collection, setCollection] = useState([]);
    let [search, setSearch] = useState("")

    useEffect(() => {
        let collection = JSON.parse(localStorage.getItem("collection"));
        setCollection(collection);
    }, [])

    return (
        <div>
            
            <div style={styles.backDrop}>
            <Container>
                <div style={styles.topBar}><h1>Collection</h1></div>
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
                        {collection.map((pokemon) => {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} disableAdd={true} />
                        })}
                    </div>
                </Container>
            </div>
        </div>
    )
}


const styles = {
    topBar: {
        padding: "10px",

        display: "flex",
        //border: "1px solid black",
        marginTop: "5%",
        justifyContent: 'center',
        color: 'white'
    },
    backDrop: {
        backgroundColor: '#1C3144',
        marginLeft: '20%',
        marginRight: '20%',
        //marginTop: '2%'

    },

}
