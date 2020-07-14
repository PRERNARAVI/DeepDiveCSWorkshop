import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import './components/HomePage/styles.css'

function App() {
  return (<Router>
    <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage} />     
          <Route path="/schedule" component={HomePage} /> 
          
      </Switch>
    </div>
  </Router>   
  );
}

export default App;