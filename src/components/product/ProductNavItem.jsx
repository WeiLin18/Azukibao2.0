import React from "react";


const ProductNavItem = (props) => {
    const { navItem, isActive } = props;
    return (
        <li className="subnav__item" key={navItem.category}>
            <span className={isActive ? 'subnav__link subnav__link--active' : 'subnav__link'} onClick={handleOnClick} data-category={navItem.category}>
                <img src={navItem.img} alt="nav-img" className="mr-3" />{navItem.name}
            </span>
        </li>
    );
};

export default ProductNavItem;
