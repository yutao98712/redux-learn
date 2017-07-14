import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="topics">Topics</Link></li>        
      </ul>
      <hr />
      <Route path="/home/:id" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/topics" component={Topics}></Route>
    </div>
    
  </Router>
);

const Home = ({ match }) => (
  <div>
    <h2>Home</h2>
    <div>{ match.route }</div>
    <div>{ match.isExact }</div>
    <div>{ match.params.id }</div>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topics = ({ match, history }) => (
  <div>
    <h2>Topics</h2>
    <div>{ history.action }</div>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/porps-v-state`}>
          Props v. State
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

const Topic = ({ match, history }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <div>{ history.length }</div>
  </div>
)

export default BasicExample