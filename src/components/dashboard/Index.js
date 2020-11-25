import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {fetchAllUsers, fetchAllPosts} from '../../actions';

import "../styles/dashboard.scss"
import Post from './Post';
import Navbar from '../designs/Navbar';

class Index extends Component {
  state = {
    show: false,
    postText: '',
    posts: null
  };

  async componentDidMount() {
    // this.props.fetchAllUsers();
    const userId = localStorage.getItem('userId');
    await this.props.fetchAllPosts(userId);
    this.setState({
      posts: this.props.posts
    })
  }

  handleClose = () => {
    this.setState({show: false});
  };

  handleOpen = () => {
    this.setState({show: true});
  };

  onPostChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  onPostSubmit = e => {
    e.preventDefault();
    this.handleClose();
    const userId = localStorage.getItem('userId')
    const postDetail = {
      userId,
      post: this.state.postText
    }
    console.log(postDetail)
  }


  render() {
    // const {posts} = this.state;
    return (
      <div className="body">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Post/>
            </div>
            <div className="col-md-3 pt-4">
              <button className="btn btn-primary btn-lg" onClick={this.handleOpen}>Say Something</button>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Thoughts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="form-control" placeholder="Share something" value={this.state.postText}
              onChange={this.onPostChange} name="postText"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.onPostSubmit}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({auth, posts}) => {
  return {users: auth, posts}
};

export default connect(mapStateToProps, {fetchAllUsers, fetchAllPosts})(Index);
