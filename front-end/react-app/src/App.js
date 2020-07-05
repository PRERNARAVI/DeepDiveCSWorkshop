import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';

function App() {
  return (<Router>
    <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage} />
          {/** 
          <Route path="/" component={Insert here} />
          <Route path="/" component={Insert here} />
          */}
      </Switch>
    </div>
  </Router>   
  );
}

export default App;