import React, { Component } from 'react';
import './App.css'
import AllOptions from './containers/AllOptions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Create your tastiest Pizza ever:
        </h1>
        <AllOptions />
      </div>
    )
  }
}

export default App