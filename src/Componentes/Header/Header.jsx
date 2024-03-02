import '../Header/Header.css';
import {BusquedaPelicula} from '../Busqueda/BusquedaPelicula'

export const Header =() =>{
    return (
      <>
      <header className="contenedor-header">
        <div className="logo-menu">
        <img src="https://wwe.cinecalidad.gg/wp-content/themes/Cinecalidad/assets/img/logo.svg?v=1aaaaaa.0" />'  
        </div>    
        <BusquedaPelicula/>
      </header>
     
      </>
    )
  }
  

