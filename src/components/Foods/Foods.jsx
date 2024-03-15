import { FaRegClock } from "react-icons/fa6";
import { LuFlame } from "react-icons/lu";


const Foods = () => {
    return (
        <div className="grid grid-cols-2 gap-6 flex-1">
            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/Y3yXJ5S/1.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                    <p className="text-[#878787] py-4">Classic Italian pasta dish with savory meat sauce.</p>
                    <hr className="mb-4" />
                    <h2 className="text-lg font-medium">Ingredients: 6</h2>
                    <ul className="my-4 list-disc pl-4 text-[#878787] space-y-1">
                        <li> 500g ground beef</li>
                        <li> 1 onion, chopped</li>
                        <li> 2 cloves garlic, minced</li>
                    </ul>
                    <hr/>
                    <div className="flex gap-4 my-6">
                        <div className="flex gap-2 items-center justify-center">
                            <FaRegClock className=""/>
                            <p>30 minutes</p>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <LuFlame />
                            <p>30 minutes</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button className="btn text-lg font-medium rounded-full px-6 bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/Y3yXJ5S/1.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                    <p className="text-[#878787] py-4">Classic Italian pasta dish with savory meat sauce.</p>
                    <hr className="mb-4" />
                    <h2 className="text-lg font-medium">Ingredients: 6</h2>
                    <ul className="my-4 list-disc pl-4 text-[#878787] space-y-1">
                        <li> 500g ground beef</li>
                        <li> 1 onion, chopped</li>
                        <li> 2 cloves garlic, minced</li>
                    </ul>
                    <hr/>
                    <div className="flex gap-4 my-6">
                        <div className="flex gap-2 items-center justify-center">
                            <FaRegClock className=""/>
                            <p>30 minutes</p>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <LuFlame />
                            <p>30 minutes</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button className="btn text-lg font-medium rounded-full px-6 bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/Y3yXJ5S/1.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                    <p className="text-[#878787] py-4">Classic Italian pasta dish with savory meat sauce.</p>
                    <hr className="mb-4" />
                    <h2 className="text-lg font-medium">Ingredients: 6</h2>
                    <ul className="my-4 list-disc pl-4 text-[#878787] space-y-1">
                        <li> 500g ground beef</li>
                        <li> 1 onion, chopped</li>
                        <li> 2 cloves garlic, minced</li>
                    </ul>
                    <hr/>
                    <div className="flex gap-4 my-6">
                        <div className="flex gap-2 items-center justify-center">
                            <FaRegClock className=""/>
                            <p>30 minutes</p>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <LuFlame />
                            <p>30 minutes</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button className="btn text-lg font-medium rounded-full px-6 bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="px-5 pt-5">
                    <img src="https://i.ibb.co/Y3yXJ5S/1.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                    <p className="text-[#878787] py-4">Classic Italian pasta dish with savory meat sauce.</p>
                    <hr className="mb-4" />
                    <h2 className="text-lg font-medium">Ingredients: 6</h2>
                    <ul className="my-4 list-disc pl-4 text-[#878787] space-y-1">
                        <li> 500g ground beef</li>
                        <li> 1 onion, chopped</li>
                        <li> 2 cloves garlic, minced</li>
                    </ul>
                    <hr/>
                    <div className="flex gap-4 my-6">
                        <div className="flex gap-2 items-center justify-center">
                            <FaRegClock className=""/>
                            <p>30 minutes</p>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <LuFlame />
                            <p>30 minutes</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button className="btn text-lg font-medium rounded-full px-6 bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foods;