import React from 'react'

import Header from 'components/Header'

const Home = ({ children }) => {
  let fecha = new Date()
  return (
    <>
      <Header />
      <div className='main-layout'>
        <div className='b elevation-4'></div>
        <footer className='footer'>
          <p>
            {`${fecha.getFullYear()} Copyright © - Todos los derechos reservados.`}
          </p>
        </footer>
        {/* <Header />
      <main>
        {children}
      </main> */}
      </div>
    </>
  )
}

export default Home
