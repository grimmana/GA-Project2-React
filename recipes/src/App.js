import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import dataForYum from './Yum.json';
import Recipe from './Recipe';
import Search from './Search';
import Home from './Home';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      puppyApiData:[]
    };
    this.setPuppyApiData = this.setPuppyApiData.bind(this);
  }

  setPuppyApiData(puppyApiData) {
    this.setState({ puppyApiData: puppyApiData});
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
        <header>
        <nav>
            <Link to='/'> Home 
            <h1>  Recipe Finder </h1>
            </Link>
            <Link to='/Recipe'> Recipe</Link>
            <br></br>
            <Link to='/Search'> Search</Link>
          </nav>
          </header>
        <main>
          <Route path="/" component = {Home} />
          <Route path="/Search" component = {Search} />
          <Route path="/Recipe" component = {Recipe} />
          <Switch>
            <Route path="/" exact render={() => <Recipe puppyApiData={this.state.puppyApiData} />} />
            <Route path="/dataforYum" exact render={(props) => <Recipe {...props} puppyApiData={this.state.puppyApiData} />} />

          </Switch>
        </main>
      </div>
    );}
  }


export default App;
