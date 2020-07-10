import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container bg-primary p-0 d-flex flex-wrap">
      <div>
        <Link to="/" className="text-white mx-1"> [Y] Hacker News</Link>
      </div>
    </div>
  )
}
