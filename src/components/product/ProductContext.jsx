import React, { createContext, useState, useEffect } from 'react'
import { allProducts } from '../../allProducts.js'
import { useProductList } from '../../hooks/useProductList'

const ProductContext = createContext({
    productList: null,
    setProductList: null,
    targetCategoryNum: null,
    setTargetCategoryNum: null,
    targetProduct: null,
    setTargetProduct: null,
})

export const ProductProvider = ({ children }) => {
    const [targetCategoryNum, setTargetCategoryNum] = useState(0)
    const [targetProduct, setTargetProduct] = useState(null)
    const [productList, setProductList] = useState(allProducts)
    const { fetchProductList, error, isLoading } = useProductList()

    useEffect(() => {
        setProductList(fetchProductList)
    }, [fetchProductList])

    return (
        <ProductContext.Provider
            value={{
                productList,
                error,
                isLoading,
                targetCategoryNum,
                setTargetCategoryNum,
                targetProduct,
                setTargetProduct,
                changeTargetProduct: (targetProductId, callback) => {
                    const targetProduct = productList.find((product) => targetProductId === product.id)
                    targetProduct && setTargetProduct(targetProduct)
                    callback && callback(targetProduct)
                },
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
