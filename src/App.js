import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import * as firebase from "firebase";

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 1
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  handleTermChange(term) {
    const rootRef = firebase.database().ref().child('react');
    const wordRef = rootRef.child('word');
    wordRef.set(term)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>

          <h1>{this.state.speed}</h1>
                    <SearchBar onTermChange={this.handleTermChange}/>

      </div>
    );
  }
}

export default App;
