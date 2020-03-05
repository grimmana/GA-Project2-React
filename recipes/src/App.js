import React from 'react';
import './App.css';
import dataJson from './recipe.json';
import { render } from 'react-dom';

function App(){
    console.log(dataJson);
    return (
      <div>
        <p>"Console log the static data in ./recipe.json"</p>
      </div>
    );
  }

export default App;
