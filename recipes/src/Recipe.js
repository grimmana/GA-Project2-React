import React, { Component } from 'react';
import "./App.css";
import text from './text.json';
import {Link} from 'react-router-dom';
import {Router} from 'react-router';


class Recipe extends Component {
    render() {
        let list = text.map(item => {
            return (
                <div className="recipe" key={item.recipe}>
              <p><Link to={"/text/" + item.recipe}>{item.recipe}</Link>{item.recipe}</p>
          </div>
        )
            })
            return <div>{list}</div>;
        // return (
        //     // <div>
        //     //     <p>{currentRecipe[0].title}</p>
        //     //     <img src={currentRecipe[0].thumbnail[0].href} /> */}
        //     // </div>
        // )
      
    }
}
export default Recipe;