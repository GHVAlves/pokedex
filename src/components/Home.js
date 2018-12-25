import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {

    static propTypes = {
        data: PropTypes.object
    }

    render() {

        return (

            <div className="display">
                Home
            </div>

        );

    }

}

export default Home;