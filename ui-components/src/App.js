import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonComponentExample from './components/button/docs/example';
import CardComponentExample from './components/card/docs/example';
import AccordionExampleUsage from './components/accordion/docs/example';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Components</h1>
        </header>
        <div className="row">
          <ButtonComponentExample />
        </div>
        <div className="row">
          <CardComponentExample />
        </div>
        <div className="row">
        <AccordionExampleUsage />
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}

export default App;
