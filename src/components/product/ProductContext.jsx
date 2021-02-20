import React, { createContext, useState, useEffect } from 'react'
import { allProducts } from '../../allProducts.js'
import { useProductList } from '../../hooks/useProductList'

const ProductContext = createContext({
    productList: null,
    targetCategoryNum: null,
    changeTargetCategoryNum: null,
    targetProductId: null,
    changeTargetProductId: null,
})

export const ProductProvider = ({ children }) => {
    const [targetCategoryNum, setTargetCategoryNum] = useState(0)
    const [targetProductId, setTargetProductId] = useState(null)
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
                changeTargetCategoryNum: (targetCategoryNum) => {
                    targetCategoryNum && setTargetCategoryNum(targetCategoryNum)
                },
                targetProductId,
                changeTargetProductId: (targetProductId, callback) => {
                    targetProductId && setTargetProductId(targetProductId)
                    callback && callback(targetProductId)
                },
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
