import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';


export default class Pokemon extends Component {
    render() {

        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <div>
                            <h3>Pokemon Name</h3>
                            <h1><em>{this.props.poke.name}</em></h1>
                        </div>
                        <div>
                            <h3>Pokemon ID</h3>
                            <h1>{this.props.poke.id}</h1>
                        </div>
                        <div>
                            <h3>Type</h3>
                            <h1>{this.props.poke.type}</h1>
                        </div>
                        <div>
                            <h3>Picture</h3>
                            <img src={this.props.poke.img} alt="" />
                        </div>

                    </Grid>
                </Grid>
            </div>
        )
    }
}
