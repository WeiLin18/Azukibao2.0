import React from "react";
import ProductApp from "../../components/product/ProductApp";

const HomeProductSection = () => {

    return (
        <section className="bg-light-gray pt-10 pb-16">
            <div className="container">
                <h2 className="section__title">商品一覽</h2>
                <ProductApp />
            </div>
        </section>
    );
};
export default HomeProductSection;


