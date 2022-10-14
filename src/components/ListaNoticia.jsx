import React from 'react'
import { Noticia } from './Noticia'

export const ListaNoticia = ({datos}) => {


  return (

    <ul className='row'>
    {
      datos.map((el,i) =>{
        return(
          <Noticia datos={el} key={i}/>
        )
      })
    }
    </ul>
  )
}
