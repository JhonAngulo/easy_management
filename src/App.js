import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'aseets/styles/sass/styles.scss'

import Layout from 'components/layouts/Main_Layout'
import Home from 'pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
export default App
