import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

class Off extends Component {

    static propTypes = {
        data: PropTypes.object
    }

    render() {

        return (

            <div className="display off">                
            </div>

        );

    }

}

export default Off;