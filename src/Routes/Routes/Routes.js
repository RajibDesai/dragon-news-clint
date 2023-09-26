import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Paiges/Home/Home/Home";
import News from "../../Paiges/News/News/News";
import Category from "../../Paiges/Category/Category/Category";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import TermsAndConditions from "../../Paiges/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../../Paiges/Others/Profile/Profile";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])