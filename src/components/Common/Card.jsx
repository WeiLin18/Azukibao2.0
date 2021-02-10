import React from "react";
import styled from "styled-components";
import ArrowSvg from "../../assets/images/link-more.svg";

// const StyledCard = styled.li`
//   background-color: #fff;

//   :hover {
//     background-color: #f3f3f3;
//   }

//   .icon {
//     width: 40px;
//   }
// `;

const Card = (props) => {
  const { imgURL, labelText, title, price, details } = props;
  return (
    <li className="product__item">
    <a href="products-28.html" className="product__item__link">
      <div className="product__item__label label">{labelText}</div>
      <div className="product__item__pic">
        <img src={imgURL} alt="product" />
        <img src={ArrowSvg} alt="more" className="product__item__pic__link" />
      </div>
      <div className="product__item__title">
        <h2 className="product__item__title__name">{title}</h2>
        <h3 className="product__item__title__price"><span className="dollor">NT</span>{price}元</h3>
      </div>
      <p className="product__item__details">{details}</p>
    </a>
  </li>
  );
};

export default Card;
