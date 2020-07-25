import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header elevation-1'>
      <span className='header__logo'>Outsourcing</span>
      <nav className='header__nav'>
        <ul className='header__items'>
          <li className='header__item'>
            <NavLink activeClassName="selected" className='header__link' to='caja'>
              Caja
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink activeClassName="selected" className='header__link' to='clientes'>
              Clientes
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink activeClassName="selected" className='header__link' to='facturacion'>
              Facturacion
            </NavLink>
          </li>
          <li className='header__item'>
            <NavLink activeClassName="selected" className='header__link' to='servicios'>
              Servicios
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
