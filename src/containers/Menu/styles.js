import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Background from '../../assets/background.svg'
import BannerHamburger from '../../assets/banner-hamburger.svg'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburger}');
  background-color: ${(props) => props.theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 70px;
    line-height: 60px;
    position: absolute;
    color: ${(props) => props.theme.white};

    right: 13%;
    top: 20%;

    span {
      display: block;
      color: ${(props) => props.theme.white};
      font-size: 20px;
    }
  }
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategoty ? `${(props) => props.theme.purple}` : '#696969'};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategoty && `3px solid ${props.theme.purple}`};
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`
export const ButtonVoltar = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: #696969;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 100%;
    width: 0;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.3s ease;
  }

  &:hover::after {
    right: 0;
    width: 100%;
  }
`
