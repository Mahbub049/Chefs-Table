import Cook from "../Cook/Cook";
import Current from "../Current/Current";
import PropTypes from 'prop-types';

const Cart = ({cooking, removeCook, currentCook, currentCooking, TimeCalories, timing, calory}) => {
    return (
        <div className="border-2 rounded-2xl flex-1 mx-5 lg:mx-0">
            <div className="px-[24px]">
                <h2 className="text-2xl font-semibold text-center mt-[32px]">Want to cook: {cooking.length}</h2>
                <hr className="w-2/3 mx-auto mt-4 mb-6"/>
                <div className="overflow-x-auto mb-[32px]">
                    <table className="table">
                        <thead>
                        <tr className="text-center text-[16px]">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody className="text-center text-[16px]">
                            {
                                cooking.map((cook, idx)=><Cook key={idx} TimeCalories={TimeCalories} currentCook={currentCook} removeCook={removeCook} idx={idx} cook={cook}></Cook>)
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-2xl font-semibold text-center mt-[32px]">Currently cooking: {currentCooking.length}</h2>
                <hr className="w-2/3 mx-auto mt-4 mb-6"/>
                <div className="overflow-x-auto mb-[32px]">
                    <table className="table">
                        <thead>
                            <tr className="text-center text-[16px]">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-[16px]">
                            {
                                currentCooking.map((cooking, idx)=><Current TimeCalories={TimeCalories} key={idx} idx={idx} cooking={cooking}></Current>)
                            }
                            <tr className="font-medium">
                                <td></td>
                                <td></td>
                                <td>Total Time = <br /> {timing} minutes</td>
                                <td>Total Calories = <br /> {calory} Calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cooking: PropTypes.object,
    removeCook: PropTypes.func, 
    currentCook: PropTypes.func,
    currentCooking: PropTypes.object,
    TimeCalories: PropTypes.func,
    timing: PropTypes.number,
    calory: PropTypes.number
}

export default Cart;