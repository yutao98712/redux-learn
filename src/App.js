import React, { Component } from 'react';
import RouterConfig from  './route' ;
import './App.css';
import BasicExample from './routes/basic';
import Test from './component/Test';
import AuthExample from './routes/Auth';
class App extends Component {
  componentDidMount() {
    console.log(this.printTalbe);
  }
  render() {
    return (
      <div className="App">
        <RouterConfig />
      </div>
    );
  }
}

export default App;
