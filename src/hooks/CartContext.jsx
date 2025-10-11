/* eslint-disable no-unused-vars */
import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  // 🛒 SALVAR ITEM NO CARRINHO
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newProductsInCart = []

    if (cartIndex >= 0) {
      // ⚙️ Evita mutação direta do array
      newProductsInCart = cartProducts.map((prd, index) =>
        index === cartIndex ? { ...prd, quantity: prd.quantity + 1 } : prd
      )
    } else {
      product.quantity = 1
      newProductsInCart = [...cartProducts, product]
    }

    setCartProducts(newProductsInCart)
    updateLocalStorage(newProductsInCart)
  }

  // 🧹 LIMPAR CARRINHO
  const clearCart = () => {
    setCartProducts([])
    updateLocalStorage([])
  }

  // 🗑️ REMOVER ITEM ESPECÍFICO
  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  // ➕ AUMENTAR QUANTIDADE
  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    )
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  // ➖ DIMINUIR QUANTIDADE
  const decreaseProduct = (productId) => {
    const product = cartProducts.find((prd) => prd.id === productId)

    if (product.quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
      )
      setCartProducts(newCart)
      updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  // 🔄 ATUALIZAR LOCAL STORAGE (com chave única)
  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
  }

  // 🔄🛒 CARREGAR CARRINHO AO RECARREGAR PÁGINA
  useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartInfo')
    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

//🥷🏻 Hook seguro para acessar o contexto do carrinho
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
