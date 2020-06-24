import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopStoriesPage from './pages/TopStoriesPage/TopStoriesPage'

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={TopStoriesPage} />
      </Switch>
    </React.Fragment>
  )
}
