import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <NavBar/>
      
      <Switch>
          <Route exact path="/"><News key="general" country="in" pageSize={9}  category="general"/></Route>
          <Route exact path="/business"><News key="business" country="in" pageSize={9}  category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" pageSize={9}  category="entertainment"/></Route>
          
          <Route exact path="/health"><News key="health" country="in" pageSize={9}  category="health"/></Route>
          <Route exact path="/science"><News key="science" country="in" pageSize={9}  category="science"/></Route>
          <Route exact path="/sports"><News key="sports" country="in" pageSize={9}  category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" country="in" pageSize={9}  category="technology"/></Route>
        </Switch>
        </Router>
      </>
    )
  }
}
