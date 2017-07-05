import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { DatePicker } from 'antd';
class RouterConfig extends Component{
  render() {
    return (
      <Router>
        <div>
          {this.props.children}
          <Route path="/products" component={DatePicker}/>
        </div>
      </Router>
      
    )
  }
}

export default RouterConfig;

