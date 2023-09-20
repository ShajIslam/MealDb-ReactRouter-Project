import { NavLink } from "react-router-dom";
import './Header.css'




const Header = () => {
    return (
        <div>
           
            <nav className="text-xl ">
                <NavLink style={{marginRight:'20px'}}  to='/home'>Home</NavLink>
               
                <NavLink style={{marginRight:'20px'}} to='/all'>All Categories</NavLink>
                <NavLink style={{marginRight:'20px'}} to='/about'>About Us</NavLink>
                <NavLink style={{marginRight:'20px'}} to='/contact'>Contact</NavLink>
                
            </nav>
           
        </div>
    );
};

export default Header;