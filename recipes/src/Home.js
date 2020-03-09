import React, { Component } from 'react';
import './App.css';
import './Home.css';
import { Link } from 'react-router-dom';
import "./App"
import text from './text.json';
import { Router } from 'react-router';

class Home extends Component {
    render() {
        let listRecipes = text.map(item => {
            return (
                <div>
                        <div className="text" key={item.title}>
                    <p><Link to={"src/text/" + item.title}></Link>{item.title}</p>
                   <p><Link> <img src={"src/text/" + item.Thumbnail} width="100" height="100">{item.Thumbnail}</img></Link>{item.Thumbnail}</p>
                    <p><Link to={"src/text/" + item.Ingredients}>{item.Ingredients}</Link>{item.Ingredients}</p>
                    <p><Link to={"src/text/" + item.href}>{item.href}</Link></p>
                </div>
            </div>
            )
        })
        return <div>{listRecipes}</div>;
    }
}


export default Home;
