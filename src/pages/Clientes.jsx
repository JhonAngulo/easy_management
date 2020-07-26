import React from 'react'

const Clientes = () => {
  return (
    <>
      <div className='card'>
        <h1 className='card__title'>Lista de clientes</h1>
        <input className='search' placeholder='Buscar'></input>
      </div>

      <table className='table'>
        <thead className=''>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Documento</th>
            <th>Eps</th>
            <th>Arl</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mario Angulo</td>
            <td>33</td>
            <td>11.445.677</td>
            <td>Sanitas</td>
            <td>Sura</td>
          </tr>
          <tr>
            <td>Mario Angulo</td>
            <td>33</td>
            <td>11.445.677</td>
            <td>Sanitas</td>
            <td>Sura</td>
          </tr>
          <tr>
            <td>Mario Angulo</td>
            <td>33</td>
            <td>11.445.677</td>
            <td>Sanitas</td>
            <td>Sura</td>
          </tr>
          <tr>
            <td>Mario Angulo</td>
            <td>33</td>
            <td>11.445.677</td>
            <td>Sanitas</td>
            <td>Sura</td>
          </tr>
          <tr>
            <td>Mario Angulo</td>
            <td>33</td>
            <td>11.445.677</td>
            <td>Sanitas</td>
            <td>Sura</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Clientes
