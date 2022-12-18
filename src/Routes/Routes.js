import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CarDetails from "../Pages/Home/Cars/CarDetails";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Bookings from '../Pages/Bookings/Bookings';
import Inventory from "../Pages/Admin/Inventory/Inventory";
import AddCar from "../Pages/Admin/AddCar/AddCar";
import Booked from "../Pages/Admin/Booked/Booked";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/car/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            },
            {
                path: '/addcar',
                element: <AddCar></AddCar>
            },
            {
                path: '/booked',
                element: <Booked></Booked>
            }
        ]
    }
])