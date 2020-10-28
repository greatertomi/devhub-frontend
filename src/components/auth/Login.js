import React from 'react';
import './auth.scss'

const Login = () => {
  return (
    <div className="col-md-6 col-sm-12 loginDiv">
      <h3>Welcome to DevHub</h3>
      <div>
        <span className="text-secondary mr-2">New Here?</span>
        <span>Sign Up.</span>
      </div>
      <form className="mt-4">
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-inline">
          <button className="btn btn-primary mr-2">Sign In</button>
          <button className="btn btn-outline-primary">Sign In With Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
