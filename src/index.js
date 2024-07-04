import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login'
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import SignupPage from './pages/SignupPage';
const router = createBrowserRouter([
  {
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {index:true ,element:<HomePage />} ,
      {path:"/collection/our-store" , element:<Store />},
      {path:"/blogs" , element:<Blogs />},
      {path:"/register" , element:<SignupPage />},
      {path:"/login" , element:<Login />},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
