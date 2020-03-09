import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import text from './text.json';

class Recipe extends Component {

    render() {
        let recipes = text.map(item => {
            return (
                <div className="recipes" key={item.title}>
                    <p><Link to={"/text/" + item.title}>{item.title}</Link>: {item.title}</p>
                </div>
            )
        })
        return<div>{ recipes } HELP </div>;

    }
} 
export default Recipe;