import { useState } from 'react'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Button } from './components/Button'

import './App.css'

function App() {
  const onAction = () => console.log('me atrapaste');
  return (
    <>
      <NavBar appName="Jsx" />
      <Header title="ReactJS" subtitle="Server Sider Rendering"/>
      <Button text='Click Me!' onAction={onAction} />
    </>
  )
}

export default App
