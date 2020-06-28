import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container bg-primary p-0 d-flex flex-wrap">
      <div>
        <Link to="/" className="text-white mx-1">[Y]</Link>
        <Link to="/" className="text-white mx-1">Hacker News</Link>
      </div>
      <a href="/#" className="text-white mx-1">new</a>
      <a href="/#" className="text-white mx-1">past</a>
      <a href="/#" className="text-white mx-1">comments</a>
      <a href="/#" className="text-white mx-1">ask</a>
      <a href="/#" className="text-white mx-1">show</a>
      <a href="/#" className="text-white mx-1">jobs</a>
      <a href="/#" className="text-white mx-1">submit</a>
      <a href="/#" className="text-white mr-1 ml-auto">login</a>
    </div>
  )
}
