import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {
  fetchAllUsers,
  fetchAllPosts,
  createPost,
  deletePost,
  likePost
} from '../../actions';

import "../styles/dashboard.scss"
import Post from './Post';
import Navbar from '../designs/Navbar';
import {Alert} from "react-bootstrap";

class Index extends Component {
  state = {
    show: false,
    postText: '',
    posts: [],
    fullName: localStorage.getItem('userName'),
    showAlert: false
  };

  async componentDidMount() {
    // const userId = localStorage.getItem('userId');
    await this.getCurrentPosts();
  }

  getCurrentPosts = async () => {
    await this.props.fetchAllPosts();
    this.setState({
      posts: this.props.posts
    })
  }

  handleClose = () => {
    console.log('here')
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

  deletePost = async (_id) => {
    await this.props.deletePost(_id)
    await this.getCurrentPosts();
    this.setState({showAlert: true})
  }

  likePost = async (postId) => {
    const userId = localStorage.getItem('userId');
    await this.props.likePost({postId, userId})
    console.log('Done')
  }

  onPostSubmit = async e => {
    e.preventDefault();
    this.handleClose();
    const userId = localStorage.getItem('userId')
    const postDetail = {
      userId,
      post: this.state.postText
    }
    await this.props.createPost(postDetail)
    await this.getCurrentPosts();
  }

  render() {
    const posts = this.state.posts.map(post =>
      <Post key={post._id} {...post} onDelete={this.deletePost} onLike={this.likePost}/>)

    return (
      <div className="body">
        <Navbar />
        <div className="text-right my-2 pr-5 font-weight-bold">
          Welcome {this.state.fullName}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {this.state.showAlert &&
                <Alert variant="danger" dismissible onClose={() => this.setState({showAlert: false})}>Post Deleted!</Alert>
              }
              {posts}
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

export default connect(mapStateToProps, {
  fetchAllUsers,
  fetchAllPosts,
  createPost,
  deletePost,
  likePost})(Index);
