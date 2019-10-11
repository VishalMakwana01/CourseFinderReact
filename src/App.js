import React from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from "./components/courses"
import Login from "./components/login"
import Register from "./components/register"
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Courses}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
