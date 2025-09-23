/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'

import { Login } from '../containers/Login'
import { Register } from '../containers/Redister'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
])
