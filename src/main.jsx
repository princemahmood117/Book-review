import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ListedBooks from './components/ListedBooks/ListedBooks';
import Home from './components/Home/Home';
import Pages from './components/Pages/Pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [

      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('./jsonData.json'),
        
      },

      {
        path : '/pages',
        element : <Pages></Pages> ,
      },

      {
        path : '/listedBooks',
        element : <ListedBooks></ListedBooks>
      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
