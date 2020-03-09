import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Recipe from './Recipe';
import Search from './Search';
import Home from './Home';
import text from './text'
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
          <header className="App-header">
            <h1 className="App-title">Recipe Finder</h1>
          </header>    
        <nav>
          <Link to='/'> Home</Link>
          <Link to='/Recipe'> Recipe</Link>
          <Link to='/Search'> Search</Link>
        </nav>
        <main>
       
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/Recipe" render={routerProps => <Recipe setRecipe={this.setRecipe}{...routerProps}{...this.state} />} />
            <Switch>
            <Route path="/" exact render={() => <Recipe pup={this.state.pup}/> }/>
            <Route path="/text" exact render={(props) => <Recipe {...props} pup={this.state.pup} /> } />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
