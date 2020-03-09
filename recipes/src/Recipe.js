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
                <div className="text" key={item.title}>
                    <p><Link to={"src/text/" + item.title}></Link>{item.title}</p>
                   <p><Link> <img src={"src/text/" + item.Thumbnail} width="100" height="100">{item.Thumbnail}</img></Link>{item.Thumbnail}</p>
                    <p><Link to={"src/text/" + item.Ingredients}>{item.Ingredients}</Link>{item.Ingredients}</p>
                    <p><Link to={"src/text/" + item.href}>{item.href}</Link></p>
                </div>
            )
        })
        return <div>{currentRecipe}</div>;
    }
}
export default Recipe;