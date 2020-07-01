import React, { useState, useEffect } from 'react'
import Comment from '../../components/Comment/Comment';
import axios from '../../utility/axios';
import Post from '../../components/Post';

export default function CommentsPage(props) {
  const [postID, setPostID] = useState(props.match.params.postID);
  const [postData, setPostData] = useState(
    props.location.data !== undefined ? props.location.data : []
  );

  useEffect(() => {
    if (postData.kids === undefined) {
      axios.get(`/item/${postID}.json?print=pretty`).then(res => {
        setPostData(res.data);
      });
    }
  });

  const listComments = postData.hasOwnProperty('kids') ? postData.kids.map((commentID, index) => {
    return <Comment data={{ commentID }} key={postData.kids[index]} />
  }) : [];


  return (
    <div className="container bg-light p-0">
      <div>
        <Post data={{
          postID: postData.id,
          index: '',
          location: props.location,
        }} />
        <div className="mx-5">
          <textarea className="d-block col-12 col-sm-8" />
          <input type="button" value="Add comment" />
        </div>
      </div>
      {listComments}
    </div>
  )
}
