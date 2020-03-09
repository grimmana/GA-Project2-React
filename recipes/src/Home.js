import React, {Component} from 'react';
import dataForYum from './Yum.json';
import './App.css';
import { render } from 'react-dom';
import Recipe from './Recipe';

class Home extends Component {
    render(){
        return(
            <div>
                <h1> Exactemente!</h1>
                <p>Quieres cocinar!</p>
            </div>
        )
    }
}

export default Home;
