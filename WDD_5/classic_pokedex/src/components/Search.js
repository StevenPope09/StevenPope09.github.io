import React from 'react';
import { Navbar, NavDropdown, Form, Nav, FormControl, Button } from 'react-bootstrap';


const Search = props => {
    return (
        <Form inline style={styles.form}>
            <FormControl style={styles.search} type="text" placeholder="Search" className="mr-sm-2" />
            <Button style={styles.srchButton} variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search;

const styles = {
    search: {
        width: '55%'
    },
    srchButton: {
        marginTop: '2%',
        alignText: 'center',
        backgroundColor: '#FF0000',
        color: 'white',
        border: '1.5px solid black'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '7%',
        marginBottom: '3%'
    }
}