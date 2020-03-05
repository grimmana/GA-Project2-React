import React, { Component } from 'react';
import{ Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import axios from "axios";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      results:[]
    }
  }

  gethotdog() {
    axios({
      method: 'GET',
      url: 'http://www.recipepuppy.com/api/?',
      headers: {'Accept': 'application/json'}
    })

    .then(response => {
      console.log(response.data.results);
      this.setState({
        results: response.data.results})
     })
    .catch(error => {
      console.log(error);
    })
  }
  componentDidMount(){
    this.gethotdog()
  }

  render() {
    return (
        <p>"api data returned from recipe puppy"</p>
    );
  }
}  

export default App;
