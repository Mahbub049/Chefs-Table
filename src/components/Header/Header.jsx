import { IoIosSearch } from "react-icons/io";
const Header = () => {
    return (
        <div className="container mx-auto my-[50px]">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div  role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-[32px] font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="form-control flex flex-row items-center">
                        <IoIosSearch className="text-[24px]"/>
                        <input type="text" placeholder="Search" className="px-1 py-3 w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                        <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Header;