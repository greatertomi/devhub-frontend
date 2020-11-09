import React, {Component} from 'react';
import Post from './Post';
import Navbar from '../designs/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "../styles/dashboard.scss"

class Index extends Component {
  state = {show: false};

  handleClose = () => {
    this.setState({show: false});
  };

  handleOpen = () => {
    this.setState({show: true});
  };

  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Post/>
            </div>
            <div className="col-md-4 pt-4 widgetDiv">
              <button className="btn btn-primary btn-lg" onClick={this.handleOpen}>Say Something</button>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Thoughts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="form-control" placeholder="Share something"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Index;