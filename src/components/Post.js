import React from 'react'

export default function Post() {
  return (
    <div className="bg-light">
      <div className="d-flex flex-wrap align-items-center">
        <span className="mx-2">1.</span>
        <span>^</span>
        <h6 className="my-0 mx-2">Title of the post goes here</h6>
        <p className="my-0">(www.example.com)</p>
      </div>
      <div className="d-flex flex-wrap">
        <p className="my-0 mx-1">100 points by</p>
        <a href="/#" className="my-0 mx-1">User</a>
        <a href="/#" className="my-0 mx-1">1 minutes ago</a>
        <a href="/#" className="my-0 mx-1">hide</a>
        <a href="/#" className="my-0 mx-1">past</a>
        <a href="/#" className="my-0 mx-1">web</a>
        <a href="/#" className="my-0 mx-1">discuss</a>
      </div>
    </div>
  )
}
