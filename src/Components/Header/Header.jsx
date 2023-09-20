import { NavLink } from "react-router-dom";
import './Header.css'




const Header = () => {
    return (
        <div className="flex justify-between shadow-md p-5 rounded-xl">

            <div>
                <img src="logo.png" alt="" />
            </div>
           
            <nav className="text-md ">
                <NavLink style={{marginRight:'20px'}}  to='/home'>Home</NavLink>
               
                <NavLink style={{marginRight:'20px'}} to='/all'>All Categories</NavLink>
                <NavLink style={{marginRight:'20px'}} to='/about'>About Us</NavLink>
                <NavLink style={{marginRight:'20px'}} to='/contact'>Contact</NavLink>
                            <button type="button" className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80  rounded-lg  mr-2 mb-2">
            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
            <span className="sr-only">Notifications</span>
            Messages
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">8</div>
            </button>
            </nav>
           
        </div>
    );
};

export default Header;