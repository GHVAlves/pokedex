import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Axios from 'axios';

/**
 * Pages
 */
import Result from './Result';
import Search from './Search';
import Home from './Home';
import ButtonSearch from './ButtonSearch';
import ButtonOnOff from './ButtonOnOff';
import Off from './Off';

class Pokedex extends Component {

    constructor(props) {

        super(props);

        const pathSplit = window.location.pathname.split('/');

        if (pathSplit[1] === 'pokemon') {

            this.state = {
                search: pathSplit[2],
                data: null
            };

        }
        else {

            this.state = {
                search: '',
                data: null
            };

        }

        this.request = this.request.bind(this);

        this.request();

    }

    request() {

        const search = this.state.search;

        Axios.get('https://pokeapi.co/api/v2/pokemon/' + search).then((response) => {

            this.setState({
                ...this.state,
                data: response.data
            });

        })
        .catch((error) => {

            this.setState({
                ...this.state,
                data: null
            });

        })

    }

    render() {

        const { 
            data,
            search
        } = this.state;

        const onInputChange = ((event) => {

            this.setState({
                ...this.state,
                search: event.target.value.toLowerCase()
            });

        });

        const onClickSearch = (() => {

            const pathSplit = window.location.pathname.split('/');

            if (pathSplit[1] === 'off') {

                alert('Ligue a Pokedex para pesquisar um Pokemon.');

            }
            else {

                if (this.state.search) {

                    this.request();
                    this.props.history.push('/pokemon/' + this.state.search); 
   
                }
                else {
                    
                    alert('Informe um Pokemon para pesquisar.');
                    
                }

            }

        });

        const onClickOnOff = (() => {

            this.setState({
                search: '',
                data: null
            });

            const pathSplit = window.location.pathname.split('/');

            if (pathSplit[1] === 'off') {

                this.props.history.push('/on/');

            }
            else {

                this.props.history.push('/off/');

            }

        });

        return (

            <div className="pokedex">
                <Switch>
                    <Route path="/off" exact component={Off} />
                    <Route path="/on" exact component={Home} />
                    <Route path="/pokemon/:pokemon/" exact render={() => {

                    return <Result data={data} />

                    }} />
                </Switch>
                <Search value={search} onChange={onInputChange} />
                <ButtonOnOff onClick={onClickOnOff}/>
                <ButtonSearch onClick={onClickSearch}/>
            </div>
                
        );

    }

}

export default withRouter(Pokedex);