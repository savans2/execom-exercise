import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import axios from '../../utility/axios'

export default function TopStoriesPage() {
  // Contains ids of posts in chunks of 30.
  let [postIds, setPostIds] = useState([]);

  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      setPostIds(chunkArray(res.data, 30));
    }).catch(error => {

    });
  }, []);

  function chunkArray(array, size) {
    let tempArray = [];

    for (let i = 0; i < array.length; i += size) {
      tempArray.push(array.slice(i, i + size));
    }

    return tempArray;
  }

  return (
    <div className="container p-0">
      <Post />
    </div>
  )
}
