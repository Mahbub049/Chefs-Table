import { useState } from "react";
import Cook from "../Cook/Cook";
import Current from "../Current/Current";

const Cart = ({cooking, removeCook, currentCook, currentCooking}) => {
    return (
        <div className="border-2 rounded-2xl flex-1">
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
                                cooking.map((cook, idx)=><Cook key={idx} currentCook={currentCook} removeCook={removeCook} idx={idx} cook={cook}></Cook>)
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
                                currentCooking.map(cooking=><Current cooking={cooking}></Current>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;