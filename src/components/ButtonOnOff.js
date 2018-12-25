import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonOnOff extends Component {
    
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }

    render() {

        return (

            <button className="button-on-off" title="Ligar/Desligar" {...this.props}></button>

        );

    }

}

export default ButtonOnOff;