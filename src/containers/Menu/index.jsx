/* eslint-disable no-unused-vars */
import { Container, Banner, CategoryMenu, ProductsContainer } from './styles'

export function Menu() {
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
      <CategoryMenu></CategoryMenu>
      
      <ProductsContainer></ProductsContainer>
    </Container>
  )
}
