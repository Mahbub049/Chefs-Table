import { FaRegClock } from "react-icons/fa6";
import { LuFlame } from "react-icons/lu";
import PropTypes from 'prop-types';

const Food = ({food, handleCooking}) => {
    const {img, name, description, ingredients, time, calories} = food;
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl border-2 mx-5 lg:mx-0">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl w-full lg:h-[200px] lg:w-[331px]" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-[#878787] py-4">{description}</p>
                    <hr className="mb-4" />
                    <h2 className="text-lg font-medium">Ingredients: {ingredients.length}</h2>
                    <ul className="my-4 list-disc pl-4 text-[#878787] space-y-1">
                        {
                            ingredients.map((item, idx)=><li key={idx}>{item}</li>)
                        }
                    </ul>
                    <hr/>
                    <div className="flex gap-4 my-6">
                        <div className="flex gap-2 items-center justify-center">
                            <FaRegClock className=""/>
                            <p>{time} minutes</p>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <LuFlame />
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button onClick={()=> handleCooking(food)} className="btn text-lg font-medium rounded-full px-6 bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired,
    handleCooking: PropTypes.func.isRequired
}

export default Food;