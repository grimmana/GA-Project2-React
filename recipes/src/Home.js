import React, { Component } from 'react';
import './App.css';
import './Home.css';
import { Link } from 'react-router-dom';
import "./App"


class Home extends Component {
    render() {
        let listRecipes = this.props.pup.map((item,index) => {
            return (
                <div key={index}>
                        <div className="text" >
                            <Link to={`/Recipe/${index}`}>{item.title}</Link>
                   <img src={item.thumbnail}></img>
                        <p>Ingredients:{item.ingredients}</p>
                </div>
            </div>
            )
        })
        return <div>{listRecipes}</div>;
    }
}




export default Home;
