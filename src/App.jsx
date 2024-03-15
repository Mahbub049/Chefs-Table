import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Foods from './components/Foods/Foods'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <Header></Header>
      <Recipes></Recipes>
      <div className='container mx-auto flex gap-6'>
        <Foods></Foods>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
