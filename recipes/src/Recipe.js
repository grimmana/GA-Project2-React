import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import Yum from './Yum.json';

class Recipe extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.puppyApiData);
        let recipeData = this.props.puppyApiData.map((Yummy, index) => {
            return (
                <div key={Yummy.id}>
                    <Link to={`/Yummy/${Yummy.id}`}>{Yummy.title}</Link>
                    <br></br> 
                    <img src={Yummy.thumbnail[0].url} width="100" height="100" />
                </div>
            )
    })
    return(
            <div> {recipeData} </div >
        )
    }
}
export default Recipe;