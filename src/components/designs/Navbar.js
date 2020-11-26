import React from 'react';
import {useHistory} from 'react-router-dom'

const Navbar = (props) => {
  const history = useHistory()
  const logOut = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('authToken')
    history.push('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">DevHub</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <span className="nav-item nav-link active">Users</span>
          <span className="nav-item nav-link">Weather</span>
          <span className="nav-item nav-link">Profile</span>
          <span className="nav-item nav-link" onClick={logOut}>Logout</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
