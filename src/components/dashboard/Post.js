import React from 'react';
import '../styles/dashboard.scss'
import john from '../../images/john.jpg'

// import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        <div className="pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur
          dicta id iure libero neque optio suscipit ut vel voluptas. Aliquid assumenda,
          aut dignissimos hic itaque nulla praesentium quasi velit.
        </div>
        <div className="mt-3 d-flex">
          <div>
            <FontAwesomeIcon icon={faHeart} size="2x" className="mr-1 actionIcon" color="grey"/>
            <span>13</span>
          </div>
          <div className="ml-5">
            <FontAwesomeIcon icon={faComment} size="2x" className="mr-1 actionIcon" color="grey"/>
            <span>4</span>
          </div>
          {/*<div className="ml-4">
            <FontAwesomeIcon icon={faSolidHeart} size="2x" className="mr-1 actionIcon" color="#BC0002"/>
            <span>4</span>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Post;
