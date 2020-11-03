import React from 'react';
import '../styles/dashboard.scss'
import john from '../../images/john.jpg'

const Post = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="postHeader">
          <div>
            <img src={john} alt="User" className="userPicture"/>
          </div>
          <div className="ml-2">
            <h4>Paul Marcos</h4>
            <div>4 Days ago</div>
          </div>
        </div>
        <hr />
        <div>
          People are doing great
        </div>
        <div>
          Footer
        </div>
      </div>
    </div>
  );
};

export default Post;
