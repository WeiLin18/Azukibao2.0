import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = ({ loginUserInfo, onLogOut }) => {
  // console.log(loginUserState, "header");
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
          <li className="nav__item"><a href="brand.html" className="nav__link" data-index="2"><span className="nav__link__icon"></span>品牌理念</a></li>
          <li className="nav__item"><a href="popular.html" className="nav__link" data-index="3"><span className="nav__link__icon"></span>注目商品</a></li>
          <li className="nav__item"><a href="products.html" className="nav__link" data-index="4"><span className="nav__link__icon"></span>商品一覽</a></li>
          <li className="nav__item"><a href="material.html" className="nav__link" data-index="5"><span className="nav__link__icon"></span>嚴選食材</a></li>
          <li className="nav__item"><a href="shop.html" className="nav__link" data-index="6"><span className="nav__link__icon"></span>店鋪情報</a></li>
          
        
      

      <Link to={`/users/${loginUserInfo.userId}`}>
        <Text fontWeight="bold">{loginUserInfo.userName}</Text>
      </Link>
      {loginUserInfo.userId ? (
        // <Link to="/login">
        <Button
          bg="white"
          variant="solid"
          color="teal.500"
          onClick={handleLogOut}
        >
          登出
        </Button>
      ) : (
        <Link to="/login">
          <Button bg="white" variant="solid" color="teal.500">
            登入
          </Button>
        </Link>
      )}
        </ul>
      </nav>
    </div>
  </header>
    
     
   
  );
};

export default Header;
