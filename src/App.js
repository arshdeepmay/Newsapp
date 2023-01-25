import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
      height={4}
        color='#f11946'
        progress={this.state.progress}
       
      />
      <NavBar/>

      <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" country="in" pageSize={9}  category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" country="in" pageSize={9}  category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" country="in" pageSize={9}  category="entertainment"/></Route>

          <Route exact path="/health"><News setProgress={this.setProgress} key="health" country="in" pageSize={9}  category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" country="in" pageSize={9}  category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" country="in" pageSize={9}  category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" country="in" pageSize={9}  category="technology"/></Route>
        </Switch>
        </Router>
      </>
    )
  }
}