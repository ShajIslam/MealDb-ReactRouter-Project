import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;