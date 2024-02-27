import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";



const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed text-white px-5 mx-auto bg-opacity-50">
                <div className="navbar-start">
                </div>
                <div className="navbar-center flex w-40">
                    <Link to='/'>
                        <img className="w-full" src="https://i.ibb.co/pRW1vtY/STEPWISE-removebg-preview-removebg-preview.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end pr-2 lg:pr-6">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button>
                        <Drawer />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;