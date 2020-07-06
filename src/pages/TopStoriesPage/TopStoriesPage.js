import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import axios from '../../utility/axios'
import { chunkArray } from '../../utility/helperFunctions'

export default function TopStoriesPage() {
  const [postIds, setPostIds] = useState([[]]);
  const [pageIndex, setPageIndex] = useState(0);
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      const postIds = chunkArray(res.data, 30);
      setPostIds(postIds);
      setListPosts(getPosts(postIds));
    });
  }, []);

  const getPosts = (postIds) => {
    setPageIndex(pageIndex + 1);
    return postIds[pageIndex].map((id, index) => ({
      postID: id,
      index: (pageIndex * 30) + index + 1
    }));
  }

  const addMorePosts = () => {
    const newPosts = getPosts(postIds);
    setListPosts([...listPosts, ...newPosts]);
  }

  return (
    <div className="container bg-light p-0">
      {
        listPosts.map((post) =>
          <Post key={post.postID} data={{
            postID: post.postID,
            index: post.index
          }} />
        )
      }
      {
        pageIndex === postIds.length - 1 ? <React.Fragment /> :
          <a href="/#" onClick={() => addMorePosts()} className="mx-2">More</a>
      }
    </div>
  )
}
