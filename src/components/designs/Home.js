import React from 'react';
import './designs.scss'
import Login from '../auth/Login';

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-4 homeLeftDiv">
        Cool 1
      </div>
      <div className="col-md-8 homeRightDiv">
        <Login />
      </div>
    </div>
  );
};

export default Home;
