/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../containers/Home'
import { Login } from '../containers/Login'
import { Menu } from '../containers/Menu'
import { Register } from '../containers/Redister'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
    {
    path: '/cardapio',
    element: <Menu />,
  },
])
