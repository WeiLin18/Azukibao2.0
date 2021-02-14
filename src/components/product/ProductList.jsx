import React from "react";
import ProductListItem from "./ProductListItem";
import { allProducts } from '../../allProducts.js';

const ProductList = () => {
  return (
        <ul className="products__list">
          {allProducts.map((theProduct, index) => {
            return (
              <ProductListItem product={theProduct} key={index} />
            )
          })}
        </ul>
  );
};
export default ProductListSection;
