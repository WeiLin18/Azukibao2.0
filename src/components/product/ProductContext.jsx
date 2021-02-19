import React, { createContext, useState, useEffect } from "react";
import { allProducts } from '../../allProducts.js';
import { useProductList } from "../../hooks/useProductList";

const ProductContext = createContext({
    productList: allProducts,
    setProductList:null,
    targetCategoryNum: null,
    setTargetCategoryNum: null,
    targetProduct: {
      category: '',
      name: '',
      price: '',
      image: '',
      slogan: '',
      label: '',
    },
    setTargetProduct: null,
  });
  
export const ProductProvider = ({ children }) => {
    const [targetCategoryNum, setTargetCategoryNum] = useState(0);
    const [targetProduct, setTargetProduct] = useState({});
    const [productList, setProductList] = useState(allProducts);
    const { fetchProductList, error,isLoading } = useProductList();

    useEffect(() => {

      setProductList(fetchProductList);
  }, [fetchProductList]);

  return (
    <ProductContext.Provider
      value={{
        productList,setProductList,error,isLoading,
        targetCategoryNum,setTargetCategoryNum,targetProduct,setTargetProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;