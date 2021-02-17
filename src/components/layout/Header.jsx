import React,{useEffect} from "react";
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

  const handleLogOut = () => {
    onLogOut && onLogOut();
  };
  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center po-re">
        <Link to="/">
          <h1 className="logo">小豆包子</h1>
        </Link>
        <div className="menu"><a className="menu__link" id="nav-toggle" href="#!"><span></span></a></div>
        <nav className="nav">
          <ul className="nav__list">
            {navLinks.map(navLink => {
              return (
                <li className="nav__item" key={navLink.id}>
                  <Link to={`/${navLink.id}`} >
                    <span className={location.pathname.includes(`/${navLink.id}`)?"nav__link nav__link--active":"nav__link"}>
                      <span className="nav__link__icon"></span>{navLink.description}
                    </span>
                  </Link>
                </li>
              )
            })}
          {loginUserInfo.userId ? (
              // <Link to="/login">
              <li className="nav__item">
                <span className="nav__link">
                  <span className="nav__link__icon" onClick={handleLogOut}>
                    登出</span>
                </span>
              </li>

            ) : (
              <li className="nav__item">
                    <Link to="/login">
                <span className="nav__link">
                  <span className="nav__link__icon">登入</span>
                </span>
                </Link>
              </li>
              )}
            {/* <Link to={`/users/${loginUserInfo.userId}`}>
              <Text fontWeight="bold">{loginUserInfo.userName}</Text>
            </Link> */}
            
          </ul>
        </nav>
      </div>
    </header>



  );
};

export default Header;
