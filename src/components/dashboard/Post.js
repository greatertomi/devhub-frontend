import React from 'react';
import * as moment from 'moment';

import '../styles/dashboard.scss'
import john from '../../images/john.jpg'

// import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Post = ({post, creatorName, _user, date, _id, onDelete, onLike}) => {
  const userId = localStorage.getItem('userId')
  const time = moment(date).fromNow()

  const onPostDelete = () => {
    onDelete(_id)
  }

  const onPostLike = () => {
    onLike(_id)
  }

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div className="postHeader">
          <div>
            <img src={john} alt="User" className="userPicture"/>
          </div>
          <div className="ml-2">
            <h4>{creatorName}</h4>
            <div>{time}</div>
          </div>
        </div>
        <div className="pt-2">
          {post}
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <FontAwesomeIcon icon={faHeart} size="2x" className="mr-1 actionIcon" color="grey"
                onClick={onPostLike}/>
              <span>13</span>
            </div>
            <div className="ml-5">
              <FontAwesomeIcon icon={faComment} size="2x" className="mr-1 actionIcon" color="grey"/>
              <span>4</span>
            </div>
          </div>
          <div>
            {_user === userId &&
            <FontAwesomeIcon icon={faTrashAlt} size="2x" className="mr-1 actionIcon"
                             color="#BC0002" onClick={onPostDelete}/>}
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
