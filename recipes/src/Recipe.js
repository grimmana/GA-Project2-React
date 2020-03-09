import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import yum from './Yum.json';

class Recipe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let currentId = this.props.match.params.href;
        let currentRecipe = this.props.yum.map((Yum, index) => {
            return currentId = Yum.id
        })
        return (
            <div>
                <p>{currentRecipe[0].title}</p>
                <img src={currentRecipe[0].thumbnail[0].href} /> */}
            </div>
        )
      
    }
}
export default Recipe;