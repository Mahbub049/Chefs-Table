import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    return (
        <div className="grid grid-cols-2 gap-6 flex-1">
            <Food></Food>
        </div>
    );
};

export default Foods;