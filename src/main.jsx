import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/Home/Home';
import Listed_books from './components/Listed_books/Listed_books';
import Pages_to_Road from './components/Pages_to_Road/Pages_to_Road';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Book_item from './components/Book_item/Book_item';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/Listed_books',
        element:<Listed_books></Listed_books>,
        loader: ()=> fetch('../asset.json')
      },
      {
        path:'/Pages_to_Road',
        element:<Pages_to_Road></Pages_to_Road>,
        loader: ()=> fetch('../asset.json')
      },
      {
        path:'/Book_item/:bookId',
        element:<Book_item></Book_item>,
        loader: ()=> fetch('../asset.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
