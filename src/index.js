import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import BagPage from './pages/BagPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<App />,
  errorElement:<ErrorPage />,
  children:[
    {
      path:"/",
      element:<HomePage />
    },
    {
      path:"/shop",
      element:<ShopPage />
    },
    {
      path:"/about",
      element:<AboutPage />
    },
    {
      path:"/bag",
      element:<BagPage />
    },
    {
      path:"/error",
      element:<ErrorPage />
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


