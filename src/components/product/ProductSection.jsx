import React, { useState,useContext } from "react";
import ProductNavItem from "./ProductNavItem";
import ProductListItem from "./ProductListItem";
import ProductNavInfos from "./ProductNavInfos";
import { useHistory } from "react-router-dom";
// import { allProducts } from '../../allProducts.js';
import ProductContext from './ProductContext';

const ProductSection = (props) => {
    const { productList, setTargetCategoryNum, targetProduct, setTargetProduct } = useContext(ProductContext);
    const { defaultCategory } = props;
    const [targetCategory, setTargetCategory] = useState(defaultCategory);
   

    let defaultShowProductList = [];
    if (defaultCategory == 0) {
        defaultShowProductList = productList;
    } else {
        defaultShowProductList = productList.filter(product => parseInt(product.category) === defaultCategory);
    }
    const [showProductList, setShowProductList] = useState(defaultShowProductList);


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
        console.log(theProduct);
        setTargetProduct && setTargetProduct(theProduct);
        history.push(`/products/${theProduct.name}`);
    }
    // useEffect(() => {
    //     setTargetProduct(targetProduct)
    // }, [targetProduct])

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
                        <ProductListItem product={theProduct} key={index} isActive={theProduct.name === targetProduct.name} onChoose={handleChangeProduct} />
                    )
                })}
            </ul>
        </>
    );








};
export default ProductSection;


