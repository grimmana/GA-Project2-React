import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Recipe from './Recipe';
import Search from './Search';
import Home from './Home';
import text from './text.json';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pup: []
    };
    this.setPup = this.setPup.bind(this);
  }

  setPup(pup) {
    this.setState({ pup: pup });
  }

  getPuppyApiData() {
    axios({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?',
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        console.log(response.data.results);
        this.setState({
          pup: response.data.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  componentDidMount() {
    this.getPuppyApiData()
  }

  render () {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Recipe Puppy - Recipe Finder</h1>
        </header>
        <nav>
          <Link to='/'> Home</Link>
          <br></br>
          <Link to='/Search'> Search by Ingredient</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home pup={this.state.pup} />} />
            <Route path="/Search" exact component={Search} />
            <Route path="/Recipe/:id" render={routerProps => <Recipe setRecipe={this.setRecipe}{...routerProps}{...this.state} />} />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;
