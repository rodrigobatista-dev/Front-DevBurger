/* eslint-disable no-unused-vars */
import Logo from '../../assets/Logo.svg'
import { CartItems, CartResume } from '../../components'
import { Container, Banner, Title, Content } from './styles'

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburguer" />
      </Banner>
      <Title>Checkout - Pedido </Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  )
}
