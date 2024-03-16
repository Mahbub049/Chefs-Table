import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Foods from './components/Foods/Foods'
import Cart from './components/Cart/Cart'
import { toast } from 'react-toastify';

function App() {
  const [cooking, setCooking] = useState([]);

  const handleCooking = cookItem => {
    const exists = cooking.find(item=> item.id === cookItem.id);
    if(!exists){
      const newCooking = [...cooking, cookItem];
      setCooking(newCooking);
    }
    else{
      toast.error('You already wanted to cook it!')
    }
  }

  const [currentCooking, setCurrentCooking] = useState([]);
  const [timing, setTiming] = useState(0);
  const [calory, setCalory] = useState(0);

  const removeCook = (item) => {
      const newItems = cooking.filter(cookItem=>cookItem.id!=item.id)
      setCooking(newItems)
  }

  const currentCook = (item) =>{
      const newCurrent = [...currentCooking, item];
      setCurrentCooking(newCurrent)
  }

  const TimeCalories = (time, cal)=>{
    setTiming(timing+time);
    setCalory(calory+cal);
  }

  return (
    <>
      <Header></Header>
      <Recipes></Recipes>
      <div className='container mx-auto flex flex-col lg:flex-row gap-6 mb-[100px]'>
        <Foods handleCooking={handleCooking}></Foods>
        <Cart timing={timing} calory={calory} TimeCalories={TimeCalories} removeCook={removeCook} cooking={cooking} currentCook={currentCook} currentCooking={currentCooking}></Cart>
      </div>
    </>
  )
}

export default App
