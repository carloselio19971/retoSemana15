import React from 'react';
import '../Cards/CardPelicula.css';
export const CardPelicula =({pelicula}) =>{
    const {img,titulo,genero,descripcion,id}=pelicula;

    return (
      <>
        <div className='card'>
          <div className='imagen-card'>
            <img src={img}/>
          </div>
          <div className='texto-card'>
            <h2>{titulo}</h2>
            <p className='genero'>Genero <span>{genero}</span></p>
            <p className='descripcion'>{descripcion}</p>
            
          </div>
        </div>
        
      </>
    )
  }
  
  