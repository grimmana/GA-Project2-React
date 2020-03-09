import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import "./Home.css";
import "./App"
import text from './text.json';
import { Router } from 'react-router';

class Recipe extends Component {
    constructor(props) {
        super(props);

    };
    render() {
        let currentRecipe = text.map(item => {
            return (
                <div className="text" key={item.url}>
                    <p><Link to={"src/text/" + item.url}>{item.url}</Link>{item.title}</p>
                </div>
            )
        })
        return <div>{currentRecipe}</div>;
    }
}
export default Recipe;