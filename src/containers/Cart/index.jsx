import Logo from '../../assets/Logo.svg'
import { Container, Banner, Title, Content } from './styles'

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburguer" />
      </Banner>
      <Title>Checkout - Pedido </Title>
      <Content>
        {/* <CartItems />
        <CartResume /> */}
      </Content>
    </Container>
  )
}
