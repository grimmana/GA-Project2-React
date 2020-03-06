import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import { render } from "react-dom";
import Yum from './Yum.json';

class indvRecipe extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.siteData);
        let recipeData = this.props.siteData.map((siteData, index) => {
            return (
                <div key={siteData.id}>
                    <Link to={`/siteData/${siteData.id}`}>{siteData.title}</Link>
                    {/* <br></br> */}
                    {/* <img src={data.thumbnail[0].url} width="100" height="100" /> */}
                </div>
            )
    })
    return(
            <div> {recipeData} </div >
        )
    }
}

export default indvRecipe;