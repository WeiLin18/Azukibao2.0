import React from "react";
import ProductSection from "../../components/product/ProductSection";

const ProductListSection = () => {

    return (
        <div className="container">
            <ProductSection defaultCategory={0} page="ProductPage"/>
        </div>
    );
};
export default ProductListSection;


