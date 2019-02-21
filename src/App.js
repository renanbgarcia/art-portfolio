import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
