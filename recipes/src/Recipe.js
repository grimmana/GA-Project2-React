import React, { Component } from 'react';
import "./App.css";
import "./Home.css";
import "./App"
import text from './text.json';

class Recipe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let pup = this.props.pup[this.props.match.params.id]
        return (
            <div>
                <p>{pup.title}</p>
                <img src={pup.thumbnail}></img>
                <p>{pup.ingredients}</p>
                <a href={pup.href}>click to visit site</a>
            </div>
        )
    }
}
export default Recipe;