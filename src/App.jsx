import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Foods from './components/Foods/Foods'
import Cart from './components/Cart/Cart'

function App() {
  const [cooking, setCooking] = useState([]);

  const handleCooking = cookItem => {
    const exists = cooking.find(item=> item.id === cookItem.id);
    if(!exists){
      const newCooking = [...cooking, cookItem];
      setCooking(newCooking);
    }
  }

  return (
    <>
      <Header></Header>
      <Recipes></Recipes>
      <div className='container mx-auto flex gap-6'>
        <Foods handleCooking={handleCooking}></Foods>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
