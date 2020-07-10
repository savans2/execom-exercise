import React, { useEffect, useState, useRef } from 'react'
import Post from '../../components/Post/Post.js'
import axios from '../../utility/axios'
import { chunkArray, isInViewport } from '../../utility/helperFunctions'
import debounce from 'lodash.debounce';

export default function TopStoriesPage() {
  const [postIds, setPostIds] = useState([[]]);
  const [pageIndex, setPageIndex] = useState(0);
  const [listPosts, setListPosts] = useState([]);
  const pageBottom = useRef();

  useEffect(() => {
    axios.get('/topstories.json?print=pretty').then(res => {
      const postIds = chunkArray(res.data, 30);
      setPostIds(postIds);
      setListPosts(getPosts(postIds));
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  const getPosts = (postIds) => {
    setPageIndex(pageIndex + 1);
    return postIds[pageIndex].map((id, index) => ({
      postID: id,
      index: (pageIndex * 30) + index + 1
    }));
  }

  const loadMorePosts = debounce(() => {
    setListPosts([...listPosts, ...getPosts(postIds)])
  }, 100);

  const onScroll = () => {
    if (isInViewport(pageBottom.current)) {
      loadMorePosts();
    }
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
        pageIndex === postIds.length ? <React.Fragment /> :
          <p ref={pageBottom} className="mx-2">Loading...</p>
      }
    </div>
  )
}
