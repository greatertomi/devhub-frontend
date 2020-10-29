import React from 'react';
import Home from '../designs/Home';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Home/>
      </div>
      <div className="col-md-7 rightDiv">
        <div className="col-md-7 col-sm-12 mt-4">
          <h3>Sign Up</h3>
          <div className="loginSubDiv text-secondary">
            Enter your details to create your account
          </div>
          <form className="mt-4">
            <div className="form-group">
              <label>Fullname</label>
              <input type="text" className="form-control" placeholder="Fullname"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password"/>
            </div>
            <div className="form-group">
              <label>Github Profile Link</label>
              <input type="text" className="form-control" placeholder="Github profile link"/>
            </div>
            <div className="form-inline">
              <button className="btn btn-primary mr-2">Submit</button>
              <Link className="btn btn-outline-danger" to="/login">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
