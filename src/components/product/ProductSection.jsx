import React, { useState, useContext, useEffect } from 'react'
import ProductNavItem from './ProductNavItem'
import ProductListItem from './ProductListItem'
import ProductNavInfos from './ProductNavInfos'
import ProductEmptyListItem from './ProductEmptyListItem'
import { useHistory } from 'react-router-dom'
import ProductContext from './ProductContext'

const ProductSection = (props) => {
    const {
        productList,
        error,
        targetCategoryNum,
        changeTargetCategoryNum,
        targetProductId,
        changeTargetProductId,
    } = useContext(ProductContext)
    const { defaultCategory } = props
    const [showProductList, setShowProductList] = useState(null)

    useEffect(() => {
        setShowProductList(productList)
        if (!productList || !defaultCategory) {
            return
        }
        if (defaultCategory !== 0) {
            const defaultShowProductList = productList.filter(
                (product) => parseInt(product.category) === defaultCategory
            )
            setShowProductList(defaultShowProductList)
        }
    }, [productList])

    const handleCategoryChange = (targetCategory) => {
        changeTargetCategoryNum && changeTargetCategoryNum(targetCategory)
        if (targetCategory === 0) {
            setShowProductList(productList)
        } else {
            const targetProductList = productList.filter((product) => parseInt(product.category) === targetCategory)
            setShowProductList(targetProductList)
        }
    }
    const history = useHistory()
    const handleProductChange = (theProductId) => {
        changeTargetProductId(theProductId, (targetProductId) => {
            if (targetProductId === null) {
                alert('沒產品')
            }
        })
        const theProduct = productList.find((product) => product.id === theProductId)
        history.push(`/products/${theProduct.name}`)
    }

    if (error) {
        return <div>{error.message}</div>
    } else {
        return (
            <>
                <nav className="pt-4">
                    <ul className="subnav mb-5">
                        {ProductNavInfos.map((theNavItem) => {
                            return (
                                <ProductNavItem
                                    navItem={theNavItem}
                                    isActive={theNavItem.category === targetCategoryNum}
                                    onChoose={handleCategoryChange}
                                    key={theNavItem.category}
                                />
                            )
                        })}
                    </ul>
                </nav>
                <ul className="products__list">
                    {showProductList
                        ? showProductList.map((theProduct, index) => {
                              return (
                                  <ProductListItem
                                      product={theProduct}
                                      key={index}
                                      isActive={targetProductId && theProduct.id === targetProductId}
                                      onChoose={handleProductChange}
                                  />
                              )
                          })
                        : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => <ProductEmptyListItem />)}
                </ul>
            </>
        )
    }
}
export default ProductSection
