import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    
    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    render() {

        return (

            <input className="search" type="text" placeholder="Pesquise um Pokemon..." {...this.props} />

        );

    }

}

export default Search;