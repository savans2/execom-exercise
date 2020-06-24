import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import axios from '../../utility/axios'
import { chunkArray } from '../../utility/helperFunctions'

export default function TopStoriesPage() {
  // Contains ids of posts in chunks of 30.
  let [postIds, setPostIds] = useState([]);

  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      setPostIds(chunkArray(res.data, 30));
    }).catch(error => {

    });
  }, []);

  return (
    <div className="container p-0">
      <Post />
    </div>
  )
}
