import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Recipe Finder</h1>
                </header>
            </div>
        )
    }
}

export default Home;
