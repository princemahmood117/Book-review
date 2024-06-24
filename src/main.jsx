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
import BookDetails from './components/BookDetails/BookDetails';
import Read from './components/Read/Read';
import WhiteList from './components/WhiteList/WhiteList';


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
      path : '/book/:bookId',
      element : <BookDetails></BookDetails>,
      loader: async ({ params }) => {
        const response = await fetch('./jsonData.json');
        const data = await response.json();
        return data.find(book => book.bookId === parseInt(params.bookId));
      },
     },



      {
        path : '/pages',
        element : <Pages></Pages>,
      },

      {
        path : '/listedBooks',
        element : <ListedBooks></ListedBooks>, 
        loader: async ({ params }) => {
          const response = await fetch('./jsonData.json');
          const data = await response.json();
          return data.find(listed => listed.bookId === parseInt(params.bookId)) || null;
        },
        children : [
          {
            index : true,
            element : <Read></Read>,
          },
          {
            path : 'whitelist',
            element : <WhiteList></WhiteList>,
          },
        ]
      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
