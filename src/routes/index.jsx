/* eslint-disable no-unused-vars */
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cart, Checkout, CompletePayment, Home, Login, Menu, Register } from '../containers/';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/home',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/complete',
    element: <CompletePayment />,
  },
])

//
// import { createBrowserRouter } from 'react-router-dom'

// import { Footer } from '../components/Footer'
// import { Header } from '../components/Header'
// import { Home } from '../containers/Home'
// import { Login } from '../containers/Login'
// import { Menu } from '../containers/Menu'
// import { Register } from '../containers/Register'
// export const router = createBrowserRouter([
//   {
//     path: '/home',
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/cadastro',
//     element: <Register />,
//   },
//   {
//     path: '/cardapio',
//     element: (
//       <>
//         <Header />
//         <Menu />
//       </>
//     ),
//   },
// ])
