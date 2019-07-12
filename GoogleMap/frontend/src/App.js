import React from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Maps from './containers/Maps';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function App() {
  return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/map" component={Maps} />
        <Route path="/login" component={Login} />
        <Route render={() => <Redirect to="/login" />} />
      </Router>
  )
}