import React from "react";
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
