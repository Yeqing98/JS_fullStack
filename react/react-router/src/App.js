import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Index () {
  return(
    <div>Home</div>
  )
}
function About () {
  return(
    <div>About</div>
  )
}
function User () {
  return(
    <div>User</div>
  )
}
function Protect () {
  return(
    <div>Protect</div>
  )
}
function Login () {
  return(
    <div>Login</div>
  )
}
/**
 * 在进入页面之前， 鉴权
 * <PrivateRouter path="/user" component={}/>
 */
function PrivateRouter(props) {
  const { path, component:Component } = props
  return(
    <Route path={path} render={
      () => {
        return false ? <Component /> : 
        <Redirect to={{
          pathname: "/login"
        }}></Redirect>
      }
    }>

    </Route>
  )
}
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">Protect Page</Link>
        </li>
      </ul>
      {
        true ? <Route path="/" exact component={Index}></Route> : <div>no router</div>
      }
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={Login}></Route>
      <PrivateRouter path="/user" component={User}></PrivateRouter>
      <Route path="/protect" render={() => {
        return false ? <Protect /> : <Redirect to={{
          pathname: '/login',
          state: {from: '/protect'}
        }} />
      }}></Route>
    </Router>
  );
}

export default App;
