import Cook from "../Cook/Cook";
import Current from "../Current/Current";

const Cart = () => {
    return (
        <div className="border-2 rounded-2xl">
            <div className="px-[24px]">
                <h2 className="text-2xl font-semibold text-center mt-[32px]">Want to cook: 01</h2>
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
                            <Cook></Cook>
                            <Cook></Cook>
                            <Cook></Cook>
                        </tbody>
                    </table>
                </div>
                <h2 className="text-2xl font-semibold text-center mt-[32px]">Currently cooking: 02</h2>
                <hr className="w-2/3 mx-auto mt-4 mb-6"/>
                <div className="overflow-x-auto mb-[32px]">
                    <table className="table">
                        <thead>
                            <Current></Current>
                        </thead>
                        <tbody className="text-center text-[16px]">
                        <tr className="bg-base-200">
                            <td>1</td>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;