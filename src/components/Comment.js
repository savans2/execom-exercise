import React from 'react'

export default function Comment() {
  return (
    <div className="bg-light">
      <div className="d-flex flex-wrap">
        <div className="mx-1">
          <div>
            <span className="mx-1">^</span>
            <span className="mx-1">name</span>
            <span className="mx-1">36 minutes ago</span>
            <span className="mx-1">[-]</span>
          </div>
          <div className="pl-4">
            <p>
              > The problem is that the behavior of your physics
              simulation depends on the delta time you pass in.
              The effect could be subtle as your game having a
              slightly different “feel” depending on framerate
              Is THIS why the physics in GTA San Andreas
              felt different on each console, and WAY different on
              PC? I have always suspected something
              like this but never knew for certain.
            </p>
            <a href="/#">Reply</a>
          </div>
        </div>
      </div>
    </div>
  )
}
