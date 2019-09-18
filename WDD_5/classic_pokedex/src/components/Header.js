import React from 'react'
import Logo from '../images/logo.png'

// import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'no-wrap',
        alignItems: 'center'
    },
    logo: {
        //Make it responsive
        width: 80,
        height: 80,
        marginLeft: 25,
        padding: 10,
        //marginTop: '5px',
        cursor: 'pointer',
        // margin: '5px'
    },
    rtNav: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 25,


    },
    button: {
        backgroundColor: 'red',
        color: 'white'
    }
});

//You can use appBar here from Material UI
//Remove extra spacing from header
const Header = props => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.header}>
                {/* <NavLink to="/Messages"> */}
                {/* sign in/up button */}
                {/* </NavLink> */}
                <img src={Logo} alt='Logo' className={classes.logo} />
                <Typography variant="h1" component="h2">
                    {props.pgTitle}
                </Typography>
                <div className={classes.rtNav}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Sign In/Up
                    </Button>
                    {/* It does not like whe you use picture in the alt tag.Throws a warning. */}
                    {/* <NavLink to="/Login"> */}
                    
                    {/* <Avatar alt="Remy Sharp" src={UserImage} className={classes.avatar} /> */}
                    {/* <img src={UserImage} alt="user" style={styles.userImg}/> */}
                    {/* </NavLink> */}
                    
                    {/* <NavLink to="/Profile" style={styles.anchor}><FaCog /></NavLink> */}
                    {/* <NavLink to="/NewsFeed"> */}
                    {/* <IconButton */}
                    {/* edge="end" */}
                    {/* className={classes.menuButton} */}
                    {/* color="secondary" */}
                    {/* > */}
                    {/* <FaSignOutAlt /> */}
                    {/* </IconButton> */}
                    {/* </NavLink> */}
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header