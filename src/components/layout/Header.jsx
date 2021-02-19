import React from "react";
import { Link, useLocation} from "react-router-dom";

const navLinks = [
  { id: "brand", description: "品牌理念" },
  { id: "popular", description: "注目商品" },
  { id: "products", description: "商品一覽" },
  { id: "material", description: "嚴選食材" },
  { id: "shop", description: "店鋪情報" },
]
const Header = ({ loginUserInfo, onLogOut }) => {
  let location = useLocation();


  const handleClickMenu = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
  }

  const handleClickLink = () => {
    const menuLink = document.querySelector(".menu__link");
    const nav = document.querySelector(".nav");
    menuLink.classList.remove("active");
    nav.classList.remove("active");
  }
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center po-re">
        <Link to="/">
          <h1 className="logo">小豆包子</h1>
        </Link>
        <div className="menu"><a className="menu__link" onClick={handleClickMenu} href="#"><span></span></a></div>
        <nav className="nav">
          <ul className="nav__list">
            {navLinks.map(navLink => {
              return (
                <li className="nav__item" key={navLink.id} onClick={handleClickLink}>
                  <Link to={`/${navLink.id}`} >
                    <span className={location.pathname.includes(`/${navLink.id}`)?"nav__link nav__link--active":"nav__link"}>
                      <span className="nav__link__icon"></span>{navLink.description}
                    </span>
                  </Link>
                </li>
              )
            })}
        
            
          </ul>
        </nav>
      </div>
    </header>



  );
};

export default Header;
