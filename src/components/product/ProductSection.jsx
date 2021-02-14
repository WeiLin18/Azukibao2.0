import React, { useState } from "react";
import ProductNavItem from "./ProductNavItem";
import ProductListItem from "./ProductListItem";
import ProductNavInfos from "./ProductNavInfos";
import { allProducts } from '../../allProducts.js';


const ProductSection = (props) => {
    const { defaultCategory,page } = props;
    const [targetCategory, setTargetCategory] = useState(defaultCategory);
    let defaultShowProductList = [];
    if(defaultCategory == 0){
        defaultShowProductList = allProducts;
    }else{
        defaultShowProductList = allProducts.filter(product => parseInt(product.category) === defaultCategory);
    }
    const [showProductList, setShowProductList] = useState(defaultShowProductList);
    const HandleChoose = (targetCategory) => {
        setTargetCategory(targetCategory);
        if (targetCategory === 0) {
            setShowProductList(allProducts);
        } else {
            let targetProductList = allProducts.filter(product => parseInt(product.category) === targetCategory);
            setShowProductList(targetProductList);
        }
    }
    if(page === 'HomePage'){
        return (
            <>
                <nav className="pt-4">
                    <ul className="subnav mb-5">
                        {ProductNavInfos.map(theNavItem => {
                            return (
                                <ProductNavItem navItem={theNavItem} isActive={theNavItem.category === targetCategory} onChoose={HandleChoose} key={theNavItem.category} />
                            )
                        })}
    
                    </ul>
                </nav>
                <ul className="products__list">
                    {showProductList.map((theProduct, index) => {
                        return (
                            <ProductListItem product={theProduct} key={index} />
                        )
                    })}
                </ul>
            </>
        );
    }else if(page === 'ProductPage'){
        return (
            <>
                <nav className="pt-4">
                    <ul className="subnav mb-5">
                        {ProductNavInfos.map(theNavItem => {
                            return (
                                <ProductNavItem navItem={theNavItem} isActive={theNavItem.category === targetCategory} onChoose={HandleChoose} key={theNavItem.category} />
                            )
                        })}
    
                    </ul>
                </nav>
                <ul className="products__list">
                    {showProductList.map((theProduct, index) => {
                        return (
                            <ProductListItem product={theProduct} key={index} />
                        )
                    })}
                </ul>
            </>
        );
    }
   
        
    

    
};
export default ProductSection;


