import React, { createContext, useContext, useState } from "react";
import { allProducts } from '../../allProducts.js';

const ProductContext = createContext({
    productList: allProducts,
    setProductList:null,
    targetCategoryNum: null,
    setTargetCategoryNum: null,
    targetProduct: {},
    setTargetProduct: null,
  });

export const ProductProvider = ({ children }) => {
    const [targetCategoryNum, setTargetCategoryNum] = useState(0);
    const [targetProduct, setTargetProduct] = useState({});
    const [productList, setProductList] = useState(allProducts);

  return (
    <ProductContext.Provider
      value={{
        productList,setProductList,
        targetCategoryNum,setTargetCategoryNum,targetProduct,setTargetProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;