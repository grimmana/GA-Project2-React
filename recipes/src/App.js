import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import text from './text.json';
import Recipe from './Recipe';
import Search from './Search';
import Home from './Home';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
    this.setRecipe = this.setRecipe.bind(this);
  }

  setRecipe(recipe) {
    this.setState({ recipe: recipe });
  }

  // getPuppyApiData() {
  //   axios({
  //     method: 'GET',
  //     url: 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?',
  //     headers: { 'Accept': 'application/json' }
  //   })
  //     .then(response => {
  //       console.log(response.data.results);
  //       this.setState({
  //         PuppyApiData: response.data.results
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
          <Link to='/'> Home</Link>
          <Link to='/Recipe'> Recipe</Link>
          <Link to='/Search'> Search</Link>
        </nav>
        <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" exact component={Search} />
          <Route path="/Recipe/:Recipe" render={routerProps => <Recipe setRecipe={this.setRecipe}{...routerProps}{...this.state} />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
