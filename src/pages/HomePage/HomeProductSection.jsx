import React from "react";
import ProductSection from "../../components/product/ProductSection";

const HomeProductSection = () => {

    return (
        <section className="bg-light-gray pt-10 pb-16">
            <div className="container">
                <h2 className="section__title">商品一覽</h2>
                <ProductSection defaultCategory={1} />
            </div>
        </section>
    );
};
export default HomeProductSection;


