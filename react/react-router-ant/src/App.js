import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './page/Layout';
import './App.css';
function Table() {
  return(
    <div>Table</div>
  )
}
function Label() {
  return(
    <div>Label</div>
  )
}
function App() {
  return (
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router>
  );
}

export default App;
