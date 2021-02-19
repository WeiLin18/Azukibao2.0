import React ,{useContext}from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDisplayHeader from "./ProductDisplayHeader";
import ProductSection from "./ProductSection";
import ProductContext from './ProductContext';


const ProductApp = () => {
    const { targetCategoryNum,targetProduct } = useContext(ProductContext);
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/products" exact>
                        <main className="bg-light-gray">
                            <div className="container">
                                <ProductSection defaultCategory={targetCategoryNum} defaultTargetProduct={null}/>
                            </div>
                        </main>
                    </Route>
                   
                    <Route path="/products/">
                        <main className="bg-light-gray">
                            <ProductDisplayHeader />
                            <section className="container">
                                <ProductSection defaultCategory={targetCategoryNum} defaultTargetProduct={targetProduct}/>
                            </section>
                        </main>
                    </Route>
                </Switch>    
        </BrowserRouter>
    );








};
export default ProductApp;


