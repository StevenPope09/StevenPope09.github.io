import React, { Component } from 'react'

export default class Pokemon extends Component {
    render() {

        return (
            <div>
                <h1><em>{this.props.poke.name}</em></h1>
                <h1>{this.props.poke.id}</h1>
                <h1>{this.props.poke.type1}, {this.props.poke.type2}</h1>
                <img src={this.props.poke.img} alt=""/>
            </div>
        )
    }
}
