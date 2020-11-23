import React, { Component } from 'react';
/*import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGuitar} from '@fortawesome/free-solid-svg-icons';*/
import '../styles/auth.scss'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {loginUser} from "../../actions";
import Home from '../designs/Home';
import Alert from "react-bootstrap/Alert";

class Login extends Component{
  state = {
    email: '',
    reqPassword: '',
    authError: false,
    errorMsg: null,
    authSuccess: false
  }

  query = new URLSearchParams(this.props.location.search);
  successMsg = this.query.get('register');

  onChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    const {email, reqPassword} = this.state;
    await this.props.loginUser({email, reqPassword})
    if (this.props.auth) {
      this.setState({
        authSuccess: true
      })
    } else if (this.props.errors) {
      this.setState({
        authError: true,
        errorMsg: 'Auth Failed!'
      })
    } else {
      this.setState({
        authError: true,
        errorMsg: `An error occurred. But we don't know why`
      })
    }
  }

  render() {
    const {email, reqPassword, authError, authSuccess, errorMsg} = this.state;
    if (authSuccess) {
      return <Redirect to='/dashboard' />
    }
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
            <div className="mt-2">
              {this.successMsg === 'success' &&
                <Alert variant="success">Registration successful! Please Login.</Alert>
              }
              {authError && <Alert variant="danger">{errorMsg}</Alert>}
            </div>
            <form className="mt-4" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Email" name="email"
                       value={email} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <div className="passwordLabelDiv">
                  <label>Password</label>
                  <span className="link font-weight-bold">Forgot Password?</span>
                </div>
                <input type="password" className="form-control" placeholder="Password" name="reqPassword"
                  value={reqPassword} onChange={this.onChange}/>
              </div>
              <div className="form-inline">
                <button type="submit" className="btn btn-primary mr-2">Sign In</button>
                <button className="btn btn-outline-primary">
                  Sign In With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, errors}) => {
  return {auth, errors}
}

export default connect(mapStateToProps, {loginUser})(Login);
