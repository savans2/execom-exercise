import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import axios from '../../utility/axios'

export default function TopStoriesPage() {
  let [postIds, setPostIds] = useState([]);
  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      setPostIds(res.data);
    }).catch(error => {

    });
  }, []);

  return (
    <div className="container p-0">
      <Post />
    </div>
  )
}
