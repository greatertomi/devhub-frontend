import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">DevHub</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <span className="nav-item nav-link active">Home <span className="sr-only">(current)</span></span>
          <span className="nav-item nav-link">Weather</span>
          <span className="nav-item nav-link">Pricing</span>
          <span className="nav-item nav-link">Notifs</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
