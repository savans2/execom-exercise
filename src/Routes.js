import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopStoriesPage from './pages/TopStoriesPage/TopStoriesPage'
import CommentsPage from './pages/CommentsPage/CommentsPage'

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={TopStoriesPage} />
        <Route path="/comments" exact component={CommentsPage} />
      </Switch>
    </React.Fragment>
  )
}
