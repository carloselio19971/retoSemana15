import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './Componentes/Header/Header'
import { Main } from './Componentes/Main/Main'
export const App =() =>{
  return (
    <>
    <div className='ancho-pagina'>
        <Header/>
        <Main/>
    </div>
    
    </>
  )
}

