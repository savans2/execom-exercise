import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import axios from '../../utility/axios'
import { chunkArray } from '../../utility/helperFunctions'

export default function TopStoriesPage() {
  // Contains ids of posts in chunks of 30.
  const [postIds, setPostIds] = useState([[]]);

  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      setPostIds(chunkArray(res.data, 30));
    }).catch(error => {

    });
  }, []);

  const listPosts = postIds[0].map((id, index) =>
    <Post key={id} data={{
      postID: id,
      index: index + 1
    }} />
  );

  return (
    <div className="container p-0">
      {listPosts}
    </div>
  )
}
