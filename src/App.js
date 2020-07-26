import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'aseets/styles/sass/styles.scss'

import Layout from 'components/layouts/Main_Layout'
import Home from 'pages/Home'
import Caja from 'pages/Caja'
import Clientes from 'pages/Clientes'
import Facturacion from 'pages/Facturacion'
import Servicios from 'pages/Servicios'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/caja' component={Caja} />
          <Route exact path='/clientes' component={Clientes} />
          <Route exact path='/facturacion' component={Facturacion} />
          <Route exact path='/servicios' component={Servicios} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
export default App
