import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';


export default class Pokemon extends Component {

    render() {
        let { name, sprites } = this.props.pokemon;
        let {front_default} = sprites;

        return (
            <div style={styles.container}>

                <div>
                    <p>{name} </p>
                </div>
                <div>
                    <img src={front_default} />
                </div>

                <button>Add to Collection</button>

            </div>
        )
    }
}

let styles = {
    container: {
        border: '1px solid black',
        display: "flex",
        flexDirection: "column"
    }
}
