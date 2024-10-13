import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import './App.css';

const Router = createBrowserRouter([
  {
  path: '/',
  element: <HomePage />
  },
  {
  path: '/login',
  element: <LoginPage />
  },
  {
  path: '/register',
  element: <RegisterPage />
  }
])

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;