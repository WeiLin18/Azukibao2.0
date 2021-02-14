import React from "react";
import ProductListItem from "../../components/product/ProductListItem";
import ProductNav from "../../components/product/ProductNav";
import { allProducts } from '../../allProducts.js';

const HomeProductSection = () => {

    return (
        <div className="container">
            <ProductNav defaultCategory={0} />
            <ul className="products__list">
                {allProducts.map((theProduct, index) => {
                    return (
                        <ProductListItem product={theProduct} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default HomeProductSection;


