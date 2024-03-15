import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = ({handleCooking}) => {
    const [foods, setFoods] = useState([]);
    
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    return (
        <div className="grid grid-cols-2 gap-6 flex-1">
            {
                foods.map(food=><Food handleCooking={handleCooking} food={food}></Food>)
            }
        </div>
    );
};

export default Foods;