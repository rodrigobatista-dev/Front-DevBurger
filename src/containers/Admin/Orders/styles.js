import Select from 'react-select'
import styled from 'styled-components'

export const ProductImage = styled.img`
  height: 70px;
  padding: 12px;
  border-radius: 16px;
`
export const SelectStatus = styled(Select)`

  width: 250px;
  `
 
export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;

`

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
  position: relative;

  border-bottom: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 3px;
    width: 100%;
    background-color: ${props => props.theme.purple};

    transform: scaleX(${props => (props.$isActiveStatus ? 1 : 0)});
    transform-origin: left;  
    transition: transform 0.5s ease;
  }

`
