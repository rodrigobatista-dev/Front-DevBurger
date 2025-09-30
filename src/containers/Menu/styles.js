import styled from "styled-components";

import BannerHamburger from '../../assets/banner-hamburger.svg';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;
`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 400px;
width: 100%;
position: relative;

background: url('${BannerHamburger}');
background-color: #1f1f1f;
background-position: center;
background-size: cover;

h1 {
     font-family: "Road Rage", sans-serif;
     font-size: 70px;
     line-height: 60px;
     position: absolute;
     color: #fff;

     right: 13%;
     top: 20%;

     span {
        display: block;
        color: #fff;
        font-size: 20px;

     }
}

`;

export const CategoryMenu = styled.div``;

export const ProductsContainer = styled.div``;