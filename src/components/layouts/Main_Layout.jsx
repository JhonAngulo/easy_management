import React from 'react'

import Header from 'components/Header'

const Home = ({ children }) => {
  let fecha = new Date()
  return (
    <>
      <Header />
      <div className='main-layout'>
        <div className='main'>{children}</div>
        <footer className='footer'>
          <p>
            {`${fecha.getFullYear()} Copyright © - Todos los derechos reservados.`}
          </p>
        </footer>
      </div>
    </>
  )
}

export default Home
