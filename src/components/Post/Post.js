import React, { useEffect, useState } from 'react'
import axios from '../../utility/axios'
import { getRelativeTime } from '../../utility/helperFunctions';
import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  Item
} from './style.js';

export default function Post(props) {
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);
  const hasUrl = postData.url === undefined ? false : true;
  const hostname = hasUrl ? new URL(postData.url).hostname : '';
  const postID = props.data.postID === undefined ?
    props.data.location.pathname.replace(/^\D+/g, '') :
    props.data.postID;

  useEffect(() => {
    axios.get(`/item/${postID}.json?print=pretty`)
      .then(res => {
        setPostData(res.data);
        setLoading(false);
      });
  }, [postID]);

  const getCommentNumber = () => {
    if (postData.hasOwnProperty('descendants')) {
      return postData.descendants === 0 ? '' : postData.descendants + ' comments'
    }
  }

  const loadingLayout =
    <div className={`bg-light py-2 d-flex`}>
      <Container className="d-flex flex-wrap">
        <Title randomWidth={Math.floor(Math.random() * 15)} />
        <Item className="mx-2" randomWidth={Math.floor(Math.random() * 30)} />
        <div className="d-flex flex-wrap ml-5">
          <Item className="m-1" randomWidth={Math.floor(Math.random() * 30)} />
          <Item className="m-1" randomWidth={Math.floor(Math.random() * 50)} />
          <Item className="m-1" randomWidth={Math.floor(Math.random() * 30)} />
          <Item className="m-1" randomWidth={Math.floor(Math.random() * 40)} />
        </div>
      </Container>
    </div>

  const loadedLayout =
    <div className="bg-light py-2 d-flex">
      <div>
        <span className="mx-1">{props.data.index}</span>
        <span>▲</span>
      </div>
      <div>
        <a href={postData.url} target="_blank" rel="noopener noreferrer" className="h6 my-0 ml-2 text-dark">
          {postData.title}
        </a>
        <a href="/#" className="my-0 mx-2" style={{ fontSize: '14px' }}> {`${hostname}`}</a>
        <div className="d-flex flex-wrap mx-1" style={{ fontSize: '14px' }}>
          <p className="my-0 mx-1">{postData.score} points</p>
          <a href="/#" className="my-0 mx-1">{postData.by}</a>
          <span href="/#" className="my-0 mx-1">{getRelativeTime(postData.time * 1000)}</span>
          <Link
            to={{
              pathname: `/comments/${postData.id}`,
              data: postData
            }}
            className="my-0 mx-1"
          >
            {getCommentNumber()}
          </Link>
        </div>
      </div>
    </div>

  return (
    <React.Fragment>
      {loading ? loadingLayout : loadedLayout}
    </React.Fragment >
  )
}
