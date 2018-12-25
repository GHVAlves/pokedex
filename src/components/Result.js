import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {

    static propTypes = {
        data: PropTypes.object
    }

    render() {

        const { data } = this.props;

        if (data) {

            return (

                <div className="display">
                    <span className="name">
                        {data.name}
                    </span>
                    <div className="sprite">
                        <img src={data.sprites.front_default}/>
                    </div>
                    <ul className="stats">

                        {data.stats.map((item, key) => {
                            
                            return <li key={key}>{item.stat.name + ': ' + item.base_stat}</li>

                        })}

                    </ul>
                    <ul className="types">

                        {data.types.map((item, key) => {
                            
                            return <li key={key}>{item.type.name}</li>

                        })}

                    </ul>
                </div>
    
            );

        }
        else {

            return (

                <div className="display">
                    Ops
                </div>
    
            );

        }        

    }

}

export default Result;