import React from 'react'
import styled from 'styled-components'
const StyledDiv = styled.div`
    width: 80%;
    height: 260px;
    margin: auto;
    background-color: #fff;
    border-radius: 55% 65% 50% 45%;
    animation: shake 0.5s ease-out infinite;
    @keyframes shake {
        0% {
            border-radius: 55% 65% 50% 45%;
        }
        50% {
            border-radius: 60% 55% 45% 50%;
        }

        100% {
            border-radius: 55% 65% 50% 45%;
        }
    }
`
const ProductEmptyListItem = () => {
    return (
        <li className="product__item">
            <StyledDiv className="product__item__link"></StyledDiv>
        </li>
    )
}

export default ProductEmptyListItem
