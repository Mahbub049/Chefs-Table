import { useEffect, useState } from "react";
import Food from "../Food/Food";
import PropTypes from 'prop-types';

const Foods = ({handleCooking}) => {
    const [foods, setFoods] = useState([]);
    
    useEffect(()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
            {
                foods.map((food, idx)=><Food key={idx} handleCooking={handleCooking} food={food}></Food>)
            }
        </div>
    );
};

Foods.propTypes = {
    handleCooking: PropTypes.func.isRequired
}

export default Foods;