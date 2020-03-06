import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Yum from './Yum.json';
import Home from './Home';
import './App.css';
import { render } from 'react-dom';
import Recipe from './Recipe';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      siteData: []
    }

  }

  // getyummies() {
    

  //   }

    
  // }

  // getPuppyApiData() {
  //   axios({
  //     method: 'GET',
  //     url: 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?',
  //     headers: { 'Accept': 'application/json' }
  //   })

  //     .then(response => {
  //       console.log(response.data.results);
  //       this.setState({
  //         siteData: response.data.results
  //       })
  //     })

  //     .catch(error => {
  //       console.log(error);
  //     })
  // }
  // componentDidMount() {
  //   this.getPuppyApiData()
  // }

  render() {
    return (
      <div>
        <nav>
            <Link to='/'>
            <h1>  Recipe Finder </h1>
            </Link>
          </nav>
        <main>
          <Route path="/" component = {Home} />
          {/* <Route path="/search" component = {} */}
          {/* <Switch>
            <Route path="/" exact render={() => <indvRecipe recipeData={this.state.siteData} />} />
          </Switch> */}
        </main>
      </div>
    );}
  }


export default App;
