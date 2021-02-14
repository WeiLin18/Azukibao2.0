import React, { useState, useContext, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDisplayHeader from "./ProductDisplayHeader";
import ProductSection from "./ProductSection";
import InstagramFooter from "../layout/InstagramFooter";


const ProductApp = (props) => {
    const [targetCategoryNum, setTargetCategoryNum] = useState(0);
    const [targetProduct, setTargetProduct] = useState({});
    const { category } = props;

    return (
        <BrowserRouter>
           
                <Switch>
                    {/* <Route path="/" exact>
                        <ProductSection defaultCategory={category} />
                    </Route> */}
                    <Route path="/products" exact>
                        <main className="bg-light-gray">
                            <div className="container">
                                <ProductSection defaultCategory={category} />
                                <InstagramFooter />
                            </div>
                        </main>
                    </Route>

                    <Route path="/products/">
                        <main class="bg-light-gray">
                            <ProductDisplayHeader />
                            <section class="container">
                                <ProductSection defaultCategory={targetCategoryNum} />
                            </section>
                        </main>
                    </Route>
                </Switch>
           
        </BrowserRouter>
    );








};
export default ProductApp;


