import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllShoes from "../Pages/AllShoes/AllShoes";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allShoes',
                element: <AllShoes />
            }
        ]
    },
]);

export default Router
