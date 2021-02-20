import React, { useState, useContext, useEffect } from 'react'
import ProductNavItem from './ProductNavItem'
import ProductListItem from './ProductListItem'
import ProductNavInfos from './ProductNavInfos'
import { useHistory } from 'react-router-dom'
import ProductContext from './ProductContext'

const ProductSection = (props) => {
    const { productList, error, isLoading, setTargetCategoryNum, targetProduct, changeTargetProduct } = useContext(
        ProductContext
    )
    const { defaultCategory } = props
    const [targetCategory, setTargetCategory] = useState(defaultCategory)
    const [showProductList, setShowProductList] = useState(productList)

    useEffect(() => {
        if (productList && defaultCategory !== 0) {
            const defaultShowProductList = productList.filter(
                (product) => parseInt(product.category) === defaultCategory
            )
            setShowProductList(defaultShowProductList)
        }
    }, [productList])

    const handleCategoryChange = (targetCategory) => {
        setTargetCategory(targetCategory)
        setTargetCategoryNum && setTargetCategoryNum(targetCategory)
        if (targetCategory === 0) {
            setShowProductList(productList)
        } else {
            let targetProductList = productList.filter((product) => parseInt(product.category) === targetCategory)
            setShowProductList(targetProductList)
        }
    }
    const history = useHistory()
    const handleProductChange = (theProductId) => {
        changeTargetProduct(theProductId, (targetProduct) => {
            if (targetProduct === null) {
                alert('沒產品')
            }
        })
        const theProduct = productList.find((product) => product.id === theProductId)
        history.push(`/products/${theProduct.name}`)
    }

    if (error) {
        return <div>{error.message}</div>
    } else if (isLoading) {
        return (
            <div>
                <h2>loading</h2>
            </div>
        )
    } else if (showProductList) {
        return (
            <>
                <nav className="pt-4">
                    <ul className="subnav mb-5">
                        {ProductNavInfos.map((theNavItem) => {
                            return (
                                <ProductNavItem
                                    navItem={theNavItem}
                                    isActive={theNavItem.category === targetCategory}
                                    onChoose={handleCategoryChange}
                                    key={theNavItem.category}
                                />
                            )
                        })}
                    </ul>
                </nav>
                <ul className="products__list">
                    {showProductList.map((theProduct, index) => {
                        return (
                            <ProductListItem
                                product={theProduct}
                                key={index}
                                isActive={targetProduct && theProduct.id === targetProduct.id}
                                onChoose={handleProductChange}
                            />
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default ProductSection
