import React from 'react';
import Button from '@material-ui/core/Button';

const Search = props => {
    // console.log(props);
    return (
        <form
            style={styles.searchForm}
            onSubmit={props.searchPoke}>
            <div style={styles.searchBar}>
                <div class="md-form mt-0">
                    <input
                        class= "form-control"
                        value={props.search}
                        onChange={props.onSearchChange}
                        style={styles.input}
                        placeholder="Search..." />
                    <Button variant="contained" component="span" color="primary">
                        Search
                        </Button>
                </div>

            </div>

        </form>
    )
}

export default Search

const styles = {
    searchForm: {
        marginTop: '1%',
        marginBottom: '5%',
        color: 'rgb(163,173,194)',
        border: '5px soild black'

    },
    // searchBar: {
    //     display: 'flex',
    //    justifyContent: 'right'
    // },
    input: {
        height: '35px',
        width: '40%',
        marginLeft: '21%',
        marginRight: '1%',
        fontSize: '1.0em',
        borderRadius: '15px',
        border: '.5px solid black',
        padding: '8px'

    },


}