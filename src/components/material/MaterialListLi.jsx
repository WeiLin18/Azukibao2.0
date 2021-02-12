import React from "react";

const MaterialListLi = (material) => {
    return (
        <li className={`material__item material__item--${material.className}`}>
            <img src={material.img} alt={material.className} />
            <p className="material__item__word">{material.subTitle}</p>
        </li>
    );
};

export default MaterialListLi;
