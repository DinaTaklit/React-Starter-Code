import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        this div has been clicked times {this.props.clicks}
      </div>
  
    );
  }
}
export default App;


