import React, { useEffect, useState } from 'react'
import axios from '../utility/axios'
import { getRelativeTime } from '../utility/helperFunctions';
import { Link } from 'react-router-dom';

export default function Post(props) {
  const [postData, setPostData] = useState({});
  const url = postData.url === undefined ? 'https://undefined.com/' : postData.url;
  const hostname = new URL(url).hostname;

  useEffect(() => {
    axios.get(`/item/${props.data.postID}.json?print=pretty`)
      .then(res => {
        setPostData(res.data);
      });
  }, []);

  return (
    <div className="bg-light pb-2">
      <div className="d-flex flex-wrap align-items-center">
        <span className="mx-2">{props.data.index}</span>
        <span>▲</span>
        <a href={postData.url} target="_blank" className="h6 my-0 mx-2 text-dark">{postData.title}</a>
        <a href="/#" className="my-0 mx-2" style={{ fontSize: '14px' }}>{`${hostname}`}</a>
      </div>
      <div className="d-flex flex-wrap ml-5" style={{ fontSize: '14px' }}>
        <p className="my-0 mx-1">{postData.score} points</p>
        <a href="/#" className="my-0 mx-1">{postData.by}</a>
        <a href="/#" className="my-0 mx-1">{getRelativeTime(postData.time * 1000)}</a>
        <a href="/#" className="my-0 mx-1">hide</a>
        <Link
          to={{
            pathname: `/comments/${postData.id}`,
            data: {
              kids: postData.kids
            }
          }}
          className="my-0 mx-1"
        >
          comments
        </Link>
      </div>
    </div >
  )
}
