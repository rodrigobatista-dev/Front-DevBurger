/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardProduct } from '../../components/CardProduct'
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from './styles'

export function Menu() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategoris() {
      const { data } = await api.get('/categories')

      const newCategoris = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategoris)
    }
    async function loadProducts() {
      const { data } = await api.get('/products')

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }))

      setProducts(newProducts)
    }

    loadCategoris();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );
      setfilteredProducts(newFilteredProducts)
    }
  },[products, activeCategory])

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBÚRGUER
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio esta irresitivél!</span>
        </h1>
      </Banner>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategoty={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id)
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
