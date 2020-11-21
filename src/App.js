import React from "react";
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Index';
import {PrivateRoute} from "./private-route";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Login}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
