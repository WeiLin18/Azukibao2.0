import React, { useState, useContext, useEffect } from "react";
import ProductNavItem from "./ProductNavItem";
import ProductListItem from "./ProductListItem";
import ProductNavInfos from "./ProductNavInfos";
import { useHistory } from "react-router-dom";
// import { allProducts } from '../../allProducts.js';
import ProductContext from './ProductContext';


const ProductSection = (props) => {
    const { productList, error, isLoading, setTargetCategoryNum, setTargetProduct } = useContext(ProductContext);
    const { defaultCategory, defaultTargetProduct } = props;
    const [targetCategory, setTargetCategory] = useState(defaultCategory);
    const [showProductList, setShowProductList] = useState(productList);


    const setDefaultState = () => {
        setTargetProduct(defaultTargetProduct);
        if (productList && defaultCategory > 0) {
            const defaultShowProductList = productList.filter(product => parseInt(product.category) === defaultCategory);
            setShowProductList(defaultShowProductList);
        }
    }


    useEffect(() => {
        setDefaultState();
    }, [productList]);




    const HandleChooseCategory = (targetCategory) => {
        setTargetCategory(targetCategory);
        setTargetCategoryNum && setTargetCategoryNum(targetCategory)
        if (targetCategory === 0) {
            setShowProductList(productList);
        } else {
            let targetProductList = productList.filter(product => parseInt(product.category) === targetCategory);
            setShowProductList(targetProductList);
        }
    }
    const history = useHistory();
    const handleChangeProduct = (theProduct) => {
        setTargetProduct && setTargetProduct(theProduct);
        history.push(`/products/${theProduct.name}`);
    }

    if (error) {
        return <div>{error.message}</div>;
    } else if (isLoading) {
        return (
            <div>
                <h2>loading</h2>
            </div>
        );
    }else if(showProductList){
        return (
            <>
                <nav className="pt-4">
                    <ul className="subnav mb-5">
                        {ProductNavInfos.map(theNavItem => {
                            return (
                                <ProductNavItem navItem={theNavItem} isActive={theNavItem.category === targetCategory} onChoose={HandleChooseCategory} key={theNavItem.category} />
                            )
                        })}
    
                    </ul>
                </nav>
                <ul className="products__list">
                    {showProductList.map((theProduct, index) => {
                        return (
                            <ProductListItem product={theProduct} key={index} isActive={defaultTargetProduct && theProduct.name === defaultTargetProduct.name} onChoose={handleChangeProduct} />
                        )
                    })}
                </ul>
            </>
        );
    }

   








};
export default ProductSection;


