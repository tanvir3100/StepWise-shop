import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar";
// import Footer from "../Components/Share/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;