import React, { useState, useEffect } from 'react'
import Comment from '../../components/Comment';
import axios from '../../utility/axios';

export default function CommentsPage(props) {
  const [postID, setPostID] = useState(props.match.params.postID);
  const [kids, setKids] = useState(
    props.location.data !== undefined ? props.location.data.kids : null
  );

  useEffect(() => {
    if (kids === null) {
      axios.get(`/item/${postID}.json?print=pretty`).then(res => {
        setKids(res.data.kids)
      });
    }
  });

  return (
    <div className="container">
      <Comment data={{ kids }} />
    </div>
  )
}
