import { useState } from 'react'
import { HeaderComponent } from './components/Header'
import { NavBarFeature } from './features/NavBar'
import { ButtonComponent } from './components/Button'


import './App.css'

function App() {
  const menuList = [
    { id: 1, text: "inicio" },
    { id: 2, text: "galeria" },
    { id: 4, text: "contacto" },
    { id: 3, text: "publicaciones" },
  ]
  const onAction = () => console.log('me atrapaste');
  return (
    <>
      <NavBarFeature appName="Jsx" list={menuList}/>
      <HeaderComponent title="ReactJS" subtitle="Server Sider Rendering" otraCosa="ok"/>
      <ButtonComponent text='Click Me!' onAction={onAction} />
    </>
  )
}

export default App
