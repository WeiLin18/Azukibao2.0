import React, { useState, useContext, useEffect } from "react";
import ProductNavItem from "./ProductNavItem";
import ProductListItem from "./ProductListItem";
import ProductNavInfos from "./ProductNavInfos";
import { useHistory } from "react-router-dom";
// import { allProducts } from '../../allProducts.js';
import ProductContext from './ProductContext';
import { useProductList } from "../../hooks/useProductList";
import { Box, Progress } from "@chakra-ui/react";


const ProductSection = (props) => {
    const { productList, setProductList, setTargetCategoryNum, targetProduct, setTargetProduct } = useContext(ProductContext);
    const { defaultCategory } = props;
    const [targetCategory, setTargetCategory] = useState(defaultCategory);
    const { fetchProductList, error } = useProductList();
    const [showProductList, setShowProductList] = useState(productList);


    const setDefaultProductList = () => {
        if (!defaultCategory === 0) {
            const defaultShowProductList = productList.filter(product => parseInt(product.category) === defaultCategory);
            setShowProductList(defaultShowProductList);
        }
    }

    useEffect(() => {
        console.log(fetchProductList);
        setProductList(fetchProductList);
        setShowProductList(fetchProductList);
    }, [fetchProductList]);

    useEffect(() => {
        setDefaultProductList();
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
        console.log(theProduct);
        setTargetProduct && setTargetProduct(theProduct);
        history.push(`/products/${theProduct.name}`);
    }

    if (error) {
        return <div>{error.message}</div>;
    } else if (!productList) {
        return (
            <Box maxW="200px" mx="auto">
                <Box as="h2" mb="5" textAlign="center">
                    loading
            </Box>
                <Progress size="xs" isIndeterminate />
            </Box>
        );
    }

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


