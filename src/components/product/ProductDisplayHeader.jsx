import React,{useContext} from "react";
import ProductContext from './ProductContext';


const ProductDisplayHeader = () => {
    const {targetProduct} = useContext(ProductContext);

    const category = [
        '全部商品',
        '爆醬包子',
        '鹹味包子',
        '養生饅頭',
        '風味饅頭',
    ]
return (
    <header className="banner">
        <div className="container container--introduce">
            <div className="breadcumb h6 po-ab">商品一覽 / <span>{targetProduct.name}</span></div>
            <div className="introduce">
                <div className="introduce__pic">
                    <div className={`introduce__pic__img introduce__pic__img--${targetProduct.image}`}></div>
                </div>
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="h1">{targetProduct.name}</h2>
                        <h3 className="h4"><span className="dollor">NT</span>{targetProduct.price}元</h3>
                    </div>

                    <h3 className="h4 font-xl-h5 mb-4">{targetProduct.slogan}</h3>
                    <ul className="h6">
                        <li>成分：麵粉、老麵、沙拉油、水、糖、鹽</li>
                        <li>過敏原：本產品含麩質之穀物、芝麻及其製品</li>
                        <li>保存方式：須冷凍於-18℃以下</li>
                        <li>最佳賞味期：一個月，開封後請儘速食用以確保品質</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
);
};

export default ProductDisplayHeader;