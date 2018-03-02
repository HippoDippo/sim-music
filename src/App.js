import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Songs from './components/Songs';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Songs />
      </div>
    );
  }
}

export default App;