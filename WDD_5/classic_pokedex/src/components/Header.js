import React from 'react'
import Logo from '../images/logo.png'
//import { NavLink } from 'react-router-dom'
//import { makeStyles } from '@material-ui/core/styles';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';


//You can use appBar here from Material UI
//Remove extra spacing from header
const Header = props => {
    //const classes = useStyles();
    return (

        <Navbar style={styles.navBar} expand="lg">

            <Navbar.Brand href="/"> <Image style={styles.logo} src={Logo} fluid /></Navbar.Brand>
            <Container style={styles.titleCon}>
                <Navbar.Brand href="/" style={styles.title}>Personal Pokedex</Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container style={styles.linkCon}>
                    <Nav className="mr-auto">
                        <div style={styles.linkDiv}>
                            <Nav.Link style={styles.links} href="/pokedex">Pokedex</Nav.Link>
                            <Nav.Link style={styles.links} href="/collection">Collections</Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar.Collapse>

        </Navbar >

    )
}
export default Header

let styles = {
    logo: {
        height: '100px',
        width: '100px',
        //marginRight: '3%'
    },
    navBar: {
        backgroundColor: '#203FED',
        color: 'white',
        width: '100%',
        //display: 'flex',
        //flexFlow: 'row wrap',
        //justifyContent: 'flex-end'


    },
    links: {

        color: 'white',
        fontSize: '18px',
        //alignContent: 'flex-end',

    },
    title: {
        color: 'white',
        fontSize: '45px',
        marginLeft: '35%'
        //justifyContent: 'center'

    },
    linkDiv: {
        //display: 'flex',
        //flexDirection: 'column',
        //float: 'right',
        //border: '1px solid red',
        marginLeft: '10%'

    },
    linkCon: {
        //border: '1px solid white',
        width: '55%'
    },
    titleCon: {
        //border: '1px solid white',
        marginLeft: '14%'
    }

}