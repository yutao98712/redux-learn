import React, { Component } from 'react';
import RouterConfig from  './route' ;
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterConfig>
          <h1>welcome!</h1>
        </RouterConfig>
      </div>
    );
  }
}

export default App;
