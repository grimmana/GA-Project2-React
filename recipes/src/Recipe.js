import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import dataForYum from './Yum.json';

class Recipe extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.puppyApiData);
        let recipeData = this.props.puppyApiData.map((dataForYum, index) => {
            return (
                <div key={dataForYum.id}>
                    <Link to={`/Yum/${dataForYum.id}`}>{dataForYum.title}</Link>
                    <br></br> 
                    <img src={dataForYum.thumbnail[0].url} width="100" height="100" />
                </div>
            )
    })
    return(
            <div> {recipeData} </div >
        )
    }
}
export default Recipe;