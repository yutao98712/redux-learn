import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} /> 
    </div>
  </Router>
)
const fakeAuth = {
  isAuthenicated: false,
  authenicate(cb) {
    this.isAuthenicated = true;
    setTimeout(cb, 100); 
  },
  signout(cb) {
    this.isAuthenicated = false;
    setTimeout(cb, 100);
  }
}

const AuthButton = withRouter(({history}) => (
  fakeAuth.isAuthenicated ? (
    <p>
      Welcome！
      <button 
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in</p>
  )
));

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenicated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const Public = () => <h3>Public</h3>

const Protected = () => <h3>Protected</h3>

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenicate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || {from: {pathname: '/'}};
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view to the page at {from.pathname}</p>
        <button onClick={this.login}>Log</button>
      </div>
    )
  }
}

export default AuthExample;