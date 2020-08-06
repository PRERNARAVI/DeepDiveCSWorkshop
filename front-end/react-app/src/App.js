import React, { Component } from 'react';
import './App.css';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import './components/HomePage/styles.css';
import SchedulePage from './components/HomePage/SchedulePage';
import WeekTwo from './components/WeekTwo/WeekTwo';
import Header from './components/Header';
import NavBar from './components/NavBar';

class App extends Component {
render() {
  return (
    <div className="App">
      <div className="background-container">
      {/** space for header of the application */}
        <Header/>
        <Row>
          <Col >
            <Row >
              {/** space for navigation bar LHS */}
              <NavBar />  
            </Row>  
            </Col>
            <Col xs={9}>    
              <Router>
                <div className="App">
                  <Switch>
                      <Route exact path='/' component={HomePage} />     
                      <Route path="/schedule" component={SchedulePage} /> 
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
            </Col>
        </Row>
      </div>  
    </div>
  );
}
}

export default App;