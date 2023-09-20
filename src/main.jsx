import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Popular from './Components/AllCategories/AllCategories.jsx';
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx';
import AllCategories from './Components/AllCategories/AllCategories.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     
      {
        path: '/home',   
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'),
        element: <Home></Home>
      },
      {
        path: '/home/:idMeal',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <ShowDetails></ShowDetails>
      },
      {
        path: '/all',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<AllCategories></AllCategories>
      }

    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
