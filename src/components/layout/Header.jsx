import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { id: 'brand', description: '品牌理念' },
    { id: 'popular', description: '注目商品' },
    { id: 'products', description: '商品一覽' },
    { id: 'material', description: '嚴選食材' },
    { id: 'shop', description: '店鋪情報' },
]
const Header = () => {
    let location = useLocation()

    const [isNavActive, setIsNavActive] = useState(false)
    const handleMenuClick = () => {
        setIsNavActive(!isNavActive)
    }

    const handleLinkClick = () => {
        setIsNavActive(false)
    }
    return (
        <header className="header">
            <div className="d-flex justify-content-between align-items-center po-re">
                <Link to="/">
                    <h1 className="logo">小豆包子</h1>
                </Link>
                <div className="menu">
                    <span className={isNavActive ? 'menu__link active' : 'menu__link'} onClick={handleMenuClick}>
                        <span></span>
                    </span>
                </div>
                <nav className={isNavActive ? 'nav active' : 'nav'}>
                    <ul className="nav__list">
                        {navLinks.map((navLink) => {
                            return (
                                <li className="nav__item" key={navLink.id} onClick={handleLinkClick}>
                                    <Link to={`/${navLink.id}`}>
                                        <span
                                            className={
                                                location.pathname.includes(`/${navLink.id}`)
                                                    ? 'nav__link nav__link--active'
                                                    : 'nav__link'
                                            }
                                        >
                                            <span className="nav__link__icon"></span>
                                            {navLink.description}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
