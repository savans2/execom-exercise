import React, { useState, useEffect } from 'react'
import Comment from '../../components/Comment';
import axios from '../../utility/axios';

export default function CommentsPage(props) {
  const [postID, setPostID] = useState(props.match.params.postID);
  const [kids, setKids] = useState(
    props.location.data !== undefined ? props.location.data.kids : []
  );

  useEffect(() => {
    if (kids.length === 0) {
      axios.get(`/item/${postID}.json?print=pretty`).then(res => {
        setKids(res.data.kids);
      });
    }
  });

  const listComments = kids.map((commentID, index) => {
    return <Comment data={{ commentID }} key={kids[index]} />
  });

  return (
    <div className="container p-0">
      {listComments}
    </div>
  )
}
