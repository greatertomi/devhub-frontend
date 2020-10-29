import React from "react";
import './App.css';
import Home from './components/designs/Home';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Login}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
