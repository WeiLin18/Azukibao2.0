import React from "react";
import { Link } from "react-router-dom";
import ArrowSvg from "../../assets/images/link-more.svg";


const ProductListItem = (props) => {
  const { product } = props;
  return (
    <li className="product__item">
      <Link to={`./product/${product.name}`} className="product__item__link">
      {product.label.trim()!=='' && <div className="product__item__label label">{product.label}</div>}
          <div className="product__item__pic">
            <img src={`https://raw.githubusercontent.com/WeiLin18/akazukibao2.0/dev/public/images/product-img-${product.image}.png`} alt="product" />
            <img src={ArrowSvg} alt="more" className="product__item__pic__link" />
          </div>
          <div className="product__item__title">
            <h2 className="product__item__title__name">{product.name}</h2>
            <h3 className="product__item__title__price"><span className="dollor">NT</span>{product.price}元</h3>
          </div>
           <p className="product__item__details">{product.slogan}</p>
          
        </Link>
      </li>
  );
};

export default ProductListItem;
