import React, { useState, useEffect } from 'react'
import axios from '../../utility/axios';
import { getRelativeTime } from '../../utility/helperFunctions'
import './style.css';
import {
  Title,
  Paragraph
} from './style.js';

export default function Comment(props) {
  const [commentData, setCommentData] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/item/${props.data.commentID}.json?print=pretty`)
      .then(res => {
        setCommentData(res.data);
        setLoading(false);
      });
  }, [props.data.commentID]);

  const listReplies = () => {
    let list;
    if (commentData.kids !== undefined) {
      list = commentData.kids.map((commentID, index) => {
        return <Comment data={{ commentID }} key={commentData.kids[index]} />
      });
    }
    return list;
  }

  const getDescendants = () => {
    if (commentData.hasOwnProperty('kids')) {
      return commentData.kids.length
    }
    return 1;
  }

  const loadingLayout =
    <React.Fragment>
      <Title className="my-2" randomWidth={Math.floor(Math.random() * 30)} />
      <Paragraph startWidth={95} randomWidth={Math.floor(Math.random() * 5)} />
      <Paragraph startWidth={90} randomWidth={Math.floor(Math.random() * 5)} />
      <Paragraph startWidth={85} randomWidth={Math.floor(Math.random() * 5)} />
      <Paragraph startWidth={80} randomWidth={Math.floor(Math.random() * 5)} />
    </React.Fragment>

  const loadedLayout =
    <div className="bg-light pt-3 comment">
      <div className="d-flex flex-wrap">
        <div className="mx-1 w-100">
          <div>
            <span className={`mx-1 ${hidden ? 'd-none' : 'd-inline'}`}>▲</span>
            <a href="/#" className="mx-1">{commentData.by}</a>
            <span className="mx-1">{getRelativeTime(commentData.time * 1000)}</span>
            <span className="mx-1"
              onClick={() => setHidden(!hidden)}>
              {hidden ? `[${getDescendants()} more]` : `[-]`}
            </span>
          </div>
          <div className={`pl-4 ${hidden ? 'd-none' : 'd-block'}`}>
            <div dangerouslySetInnerHTML={{ __html: commentData.text }} />
            <a href="/#">Reply</a>
          </div>
        </div>
      </div>
      <div className={`bg-light ml-4 ${hidden ? 'd-none' : 'd-block'}`}>
        {listReplies()}
      </div>
    </div>

  const renderComment = () => {
    if (loading) {
      return loadingLayout;
    } else if ((commentData !== null || !commentData.deleted) && !loading) {
      return loadedLayout;
    }
  }

  return (
    <React.Fragment>
      {renderComment()}
    </React.Fragment>
  );
}
