import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';


export default class Pokemon extends Component {
    render() {

        return (
            <div style={styles.container}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={3}>
                        <div>
                            <p>{this.props.poke.id}</p>
                        </div>
                        <div>
                            <p>{this.props.poke.name} </p>
                        </div>
                        <div>
                            <p>{this.props.poke.type}</p>
                        </div>
                        <div>
                            <img src={this.props.poke.img} alt="" />
                        </div>
                        <div>
                            <button>Add to Collection</button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

let styles = {
    container: {
        border: '1px solid black'
    }
}
