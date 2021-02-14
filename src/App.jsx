import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  withRouter
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductApp from "./components/product/ProductApp";
import LoginPage from "./pages/LoginAndSignup/LoginPage";
import SignupPage from "./pages/LoginAndSignup/SignupPage";
// import UserListPage from "./pages/user/UserListPage";
// import UserProfilePage from "./pages/user/UserProfilePage";
import HomePage from "./pages/HomePage";
import BrandPage from "./pages/BrandPage";
import MaterialPage from "./pages/MaterialPage";
import PopularPage from "./pages/PopularPage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import { ProductProvider } from './components/product/ProductContext';
import "./assets/style/all.scss";
// reach router
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

export default function App() {
  const defaultLoginState = {
    isLogin: false,
    authToken: ""
  };
  const defaultLoginInfo = {
    userId: "",
    userName: ""
  };
  const [loginState, setLoginState] = useState(defaultLoginState);
  const [loginInfo, setLoginInfo] = useState(defaultLoginInfo);
  const handleLogin = (theauthToken) => {
    setLoginState({
      isLogin: true,
      authToken: theauthToken
    });
  };
  const handleUserInfo = (thisUserId, thisUserName) => {
    setLoginInfo({
      userId: thisUserId,
      userName: thisUserName
    });
  };
  const history = useHistory();
  const handleClearLogin = () => {
    setLoginState({
      isLogin: false,
      authToken: ""
    });
    setLoginInfo({
      userId: "",
      userName: ""
    });
    // history.push(`/users/`);
    // console.log("logOut");
  };
  // console.log(loginUserId);
  // console.log(loginState);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header loginUserInfo={loginInfo} onLogOut={handleClearLogin} />
        
          <Switch>
          <ProductProvider>
            <Route exact path="/">
              <HomePage />
              {/* <Redirect from="/" to="/users" /> */}
            </Route>
            <Route path="/products">
              <ProductApp category={0}/>
            </Route>
            </ProductProvider>
            {/* <Route path="/users" exact>
              <UserListPage />
            </Route> */}
            <Route path="/brand" exact>
              <BrandPage />
            </Route>
            <Route path="/popular" exact>
              <PopularPage />
            </Route>
            <Route path="/material" exact>
              <MaterialPage />
            </Route>
            <Route path="/shop" exact>
              <ShopPage />
            </Route>
            {/* <Route path="/users/:userId">
              <UserProfilePage
                ondelete={handleClearLogin}
                loginUserState={loginState}
                loginUserInfo={loginInfo}
                onupdateUserName={handleUserInfo}
              />
            </Route> */}
            <Route path="/login">
              <LoginPage
                onLogin={handleLogin}
                getThisUserInfo={handleUserInfo}
              />
            </Route>
            <Route path="/signup">
              <SignupPage
                onLogin={handleLogin}
                getThisUserInfo={handleUserInfo}
              />
            </Route>
          </Switch>
          
        
        <Footer />
        </ScrollToTop>
    </BrowserRouter>
  );
}
