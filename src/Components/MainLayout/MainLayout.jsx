import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const MainLayout = () => {
    return (
        <>
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <br />
            <br />
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;