import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './component/management/HomePage';
class RouterConfig extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/userCenter" />
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig;

