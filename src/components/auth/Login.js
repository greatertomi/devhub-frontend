import React from 'react';
/*import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar} from '@fortawesome/free-solid-svg-icons';*/
import '../styles/auth.scss'
import {Link} from 'react-router-dom';
import Home from '../designs/Home';

const Login = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Home/>
      </div>
      <div className="col-md-7 rightDiv">
        <div className="col-md-6 col-sm-12 loginDiv">
          <h3>Welcome to DevHub</h3>
          <div className="loginSubDiv">
            <span className="text-secondary mr-2">New Here?</span>
            <Link to="/register" className="link">Sign Up.</Link>
          </div>
          <form className="mt-4">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <div className="passwordLabelDiv">
                <label>Password</label>
                <span className="link font-weight-bold">Forgot Password?</span>
              </div>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-inline">
              <button className="btn btn-primary mr-2">Sign In</button>
              <button className="btn btn-outline-primary">
                {/*<FontAwesomeIcon icon={faGuitar} />*/}
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
