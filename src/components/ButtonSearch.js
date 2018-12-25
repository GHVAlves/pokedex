import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSearch extends Component {
    
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }

    render() {

        return (

            <button className="button-search" title="Pesquisar..." {...this.props}></button>

        );

    }

}

export default ButtonSearch;