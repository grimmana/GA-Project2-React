import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import text from './text.json';

class Recipe extends Component {
    render() {
        let currentRecipe = text.map(item => {
            return (
                <div className="recipe" key={item.title}>

                    <p><Link to={"/text/" + item.title}>{item.title}</Link>: {item.title}</p> 


                </div>

                
            )
            
        }) 
        
        return <div>{currentRecipe}</div>;
        // let recipeId = this.props.match.params.index
        // let recipe = this.props.yum.filter((yum, index) => {
            // return recipeId === recipe.index
        // })
            // return (
                // <div>

                //     {/* <p>{recipe[0].title}</p> */}
                //     {/* <img src={recipe[0].thumbnail[0].url} width="100" height="100" /> */}
                // </div>
    }         
}
    export default Recipe;