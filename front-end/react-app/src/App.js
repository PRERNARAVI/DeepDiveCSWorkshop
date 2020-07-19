import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import './components/HomePage/styles.css'
import WeekTwo from './components/WeekTwo/WeekTwo';

function App() {
  return (<Router>
    <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage} />     
          <Route path="/schedule" component={HomePage} /> 
          <Route path='/week1' component={WeekTwo} />
          <Route path='/week2' component={WeekTwo} />
          <Route path='/week3' component={WeekTwo} />
          <Route path='/week4' component={WeekTwo} />
          <Route path='/week5' component={WeekTwo} />
          <Route path='/week6' component={WeekTwo} />
          <Route path='/week7' component={WeekTwo} />
          <Route path='/week8' component={WeekTwo} />
          
      </Switch>
    </div>
  </Router>   
  );
}

export default App;