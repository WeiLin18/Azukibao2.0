import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductModal from '../components/product/ProductModal'
import ProductSection from '../components/product/ProductSection'
import ProductContext from '../components/product/ProductContext'

const ProductPage = () => {
    const { targetCategoryNum, targetProduct } = useContext(ProductContext)
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/products">
                    <main className="bg-light-gray">
                        {targetProduct && <ProductModal />}
                        <div className="container">
                            <ProductSection defaultCategory={targetCategoryNum} />
                        </div>
                    </main>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default ProductPage
