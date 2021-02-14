import React from "react";
import ProductListItem from "../../components/product/ProductListItem";
import ProductNav from "../../components/product/ProductNav";
import { allProducts } from '../../allProducts.js';

const HomeProductSection = () => {

    return (
        <section className="bg-light-gray pt-10 pb-16">
            <div className="container">
                <h2 className="section__title">商品一覽</h2>
                <ProductNav defaultCategory={1}/>
                <ul className="products__list">
                    {allProducts.slice(0, 6).map((theProduct, index) => {
                        return (
                            <ProductListItem product={theProduct} key={index} />
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};
export default HomeProductSection;


