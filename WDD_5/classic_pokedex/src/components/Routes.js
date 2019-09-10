import React from 'react';
import { Route } from "react-router-dom";
import Collection from '../components/pages/Collection';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Pokedex from '../components/pages/Pokedex';
import { makeStyles } from '@material-ui/core/styles';
//I would add the background color here.
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: 'green',
        maxWidth: 900
    },
}));

function Routes(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Add a route here for when page initally loads */}
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Watch' component={Pokedex} />
            {/* <Route exact path='/Profile' component={Profile} /> */}
        </div>
    )
}
export default Routes;

