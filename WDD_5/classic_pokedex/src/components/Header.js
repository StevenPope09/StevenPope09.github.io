import React from 'react'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
//import { makeStyles } from '@material-ui/core/styles';
import { Navbar,Nav, Image} from 'react-bootstrap';


//You can use appBar here from Material UI
//Remove extra spacing from header
const Header = props => {
    //const classes = useStyles();
    return (
        <Navbar style={styles.navBar} expand="lg">
            <Navbar.Brand href="/"> <Image style={styles.logo} src={Logo} fluid /></Navbar.Brand>
            {/* <Container> */}
                <Navbar.Brand href="/" style={styles.title}>Personal Pokedex</Navbar.Brand>
            

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <div>
                        <Nav.Link style={styles.links} href="/pokedex">Pokedex</Nav.Link>
                        <Nav.Link style={styles.links} href="/collection">Collections</Nav.Link>
                    </div>

                </Nav>

            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
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
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
        

    },
    links: {
        
        color: 'white',
        //display: 'inline',
        fontSize: '25px',
        float: 'right'
    },
    title: {
        color: 'white',
        fontSize: '45px',
        alignText: 'center'

    }
}