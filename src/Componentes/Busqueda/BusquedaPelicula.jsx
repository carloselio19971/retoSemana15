import '../Busqueda/BusquedaPelicula.css';
import buscar from'../../assets/img/buscar.svg'
export const BusquedaPelicula =() =>{
    return (
      <>
        <div className='contenedor-busqueda'>
            <div className='input-busqueda'>
              <div className='busqueda'>
                <img src={buscar}/>
                <input type='text' placeholder='Busca Pelicula' />
              </div>
              
            </div>
            <div className='boton-busqueda'>
                  <button>Buscar</button>
            </div>
        </div>
      </>
    )
  }
  