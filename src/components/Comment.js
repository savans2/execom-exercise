import React, { useState, useEffect } from 'react'
import axios from '../utility/axios';
import { getRelativeTime } from '../utility/helperFunctions'

export default function Comment(props) {
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    axios.get(`/item/${props.data.commentID}.json?print=pretty`)
      .then(res => {
        setCommentData(res.data);
      });
  }, []);

  const listReplies = () => {
    let list;
    if (commentData.kids !== undefined) {
      list = commentData.kids.map((commentID, index) => {
        return <Comment data={{ commentID }} key={commentData.kids[index]} />
      });
    }
    return list;
  }

  return (
    <div className="bg-light py-3">
      <div className="d-flex flex-wrap">
        <div className="mx-1">
          <div>
            <span className="mx-1">▲</span>
            <a href="/#" className="mx-1">{commentData.by}</a>
            <span className="mx-1">{getRelativeTime(commentData.time * 1000)}</span>
            <span className="mx-1">[-]</span>
          </div>
          <div className="pl-4">
            <div dangerouslySetInnerHTML={{ __html: commentData.text }} />
            <a href="/#">Reply</a>
          </div>
        </div>
      </div>
      <div className="bg-secondary ml-4">
        {listReplies()}
      </div>
    </div>
  )
}
