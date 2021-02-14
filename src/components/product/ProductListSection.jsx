import React from "react";
import ProductListItem from "./ProductListItem";
import { allProducts } from '../../allProducts.js';

const ProductListSection = (props) => {
  const { className, showNum } = props;
  return (
    <section className={className}>
      <div className="container">
        <ul className="products__list">
          {allProducts.slice(0,6).map((theProduct, index) => {
            return (
              <ProductListItem product={theProduct} key={index} />
            )
          })}
        </ul>
      </div>
    </section>
  );
};
export default ProductListSection;
