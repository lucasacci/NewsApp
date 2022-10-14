import React from 'react'

export const Noticia = ({datos}) => {
  return (
    <li className='card col-6 col-md-4 col-lg-3 m-4 widthCard'>
      <img src={datos.image_url} alt={datos.source_id} />
      <hr />
      <h4>{datos.title}</h4>
      <hr />
      <p>{datos.description.substring(0,100)+ `...`}</p>
      <a href={datos.link}  className='btn btn-primary my-3'>Ver mas</a>
    </li>
  )
}
