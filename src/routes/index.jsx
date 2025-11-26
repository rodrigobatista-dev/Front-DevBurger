/* eslint-disable no-unused-vars */
import { Navigate, Route, Routes } from 'react-router-dom'

import {
  Orders,
  Cart,
  Checkout,
  CompletePayment,
  EditProduct,
  Home,
  Login,
  Menu,
  NewProduct,
  Products,
  Register,

} from '../containers/'
import { AdminLayout } from '../layouts/AdminLayout'
import { UserLayout } from '../layouts/UserLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProduct />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />  
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      <Route element={<UserLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>
    </Routes>
  )
}

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/login" replace />,
//   },
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
//   {
//     path: '/carrinho',
//     element: <Cart />,
//   },
//   {
//     path: '/checkout',
//     element: <Checkout />,
//   },
//   {
//     path: '/complete',
//     element: <CompletePayment />,
//   },
// ])

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
