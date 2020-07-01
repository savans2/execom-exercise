import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import axios from '../../utility/axios'
import { chunkArray } from '../../utility/helperFunctions'

export default function TopStoriesPage() {
  const [postIds, setPostIds] = useState([[]]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      setPostIds(chunkArray(res.data, 30));
    });
  }, []);

  const listPosts = postIds[pageIndex].map((id, index) =>
    <Post key={id} data={{
      postID: id,
      index: (pageIndex * 30) + index + 1
    }} />
  );

  return (
    <div className="container bg-light p-0">
      {listPosts}
      {
        pageIndex === postIds.length - 1 ? <React.Fragment /> :
          <a href="/#" onClick={() => setPageIndex(pageIndex + 1)} className="mx-2">More</a>
      }
    </div>
  )
}
