import styled from 'styled-components'

import Background from '../../assets/background.svg'
import BannerHome from '../../assets/banner-home.svg'

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 400px;
  margin: auto;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    right: 15%;
    top: 20%;
  }
`

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  min-height: 100vh;
`
