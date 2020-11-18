import React, {Component} from 'react';
import Home from '../designs/Home';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {registerUser} from '../../actions';
import Alert from "react-bootstrap/Alert";

class Register extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    password2: '',
    githubLink: '',
    showAlert: false
  };

  onChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  getSuccessMessage = () => {
    const {auth} = this.props;
    if (auth.message) {
      this.setState({
        showAlert: true
      })
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
    this.getSuccessMessage();
  };

  render() {
    const {fullName, email, password, password2, githubLink} = this.state;
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
            <div>
              <form className="mt-4" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                  <label>Fullname</label>
                  <input type="text" name="fullName" className="form-control" placeholder="Full name"
                         value={fullName} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" className="form-control" placeholder="Email"
                         value={email} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Password"
                         value={password} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" name="password2" className="form-control" placeholder="Confirm Password"
                         value={password2} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>Github Profile Link</label>
                  <input type="text" name="githubLink" className="form-control" placeholder="Github profile link"
                         value={githubLink} onChange={this.onChange}/>
                </div>
                {this.state.showAlert && <Alert variant="success" dismissible>Account created!</Alert>}
                <div className="form-inline">
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <Link className="btn btn-outline-danger" to="/login">
                    Cancel
                  </Link>
                  <button className="btn btn-primary">Navigate</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
};

export default connect(mapStateToProps, {registerUser})(Register);
