import React from "react";
// import { Link } from "react-router-dom";
import InstagramFooter from "../../components/layout/InstagramFooter";
import ProductListSection from "./ProductListSection";


const ProductPage = () => {

    return (
        <main className="bg-light-gray">
            <ProductListSection/>
            <InstagramFooter />
        </main>
    );
};

export default ProductPage;
