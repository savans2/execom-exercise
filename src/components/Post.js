import React, { useEffect, useState } from 'react'
import axios from '../utility/axios'

export default function Post(props) {
  const [postData, setPostData] = useState({});

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
        <span>^</span>
        <h6 className="my-0 mx-2">{postData.title}</h6>
        <p className="my-0">(www.example.com)</p>
      </div>
      <div className="d-flex flex-wrap">
        <p className="my-0 mx-1">{postData.score} points</p>
        <a href="/#" className="my-0 mx-1">{postData.by}</a>
        <a href="/#" className="my-0 mx-1">{postData.time}</a>
        <a href="/#" className="my-0 mx-1">hide</a>
        <a href="/#" className="my-0 mx-1">comment</a>
      </div>
    </div>
  )
}
