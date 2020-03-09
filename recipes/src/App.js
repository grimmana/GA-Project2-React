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
        <nav>
          <Link to='/'> Home
              <h1>  Recipe Finder </h1>
          </Link>
          <Link to='/Recipe'> Recipe</Link>
          <Link to='/Search'> Search</Link>
        </nav>
        <main>
          <Route path="/" component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/src/:text" render={routerProps => <Recipe setRecipe={this.setRecipe} {...routerProps} {...this.state} />}
          />
          <Switch>
            <Route path="/" exact render={() => <Recipe pup={this.state.pup} />} />
            <Route path="/text" exact render={(props) => <Recipe {...props} pup={this.state.pup} />} />
          </Switch>
        </main>
      </div>
    );
  }


}
export default App;
