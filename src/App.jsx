import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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
import "./assets/style/all.scss";
// reach router
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
      <ChakraProvider>
        <Header loginUserInfo={loginInfo} onLogOut={handleClearLogin} />
        
          <Switch>
            <Route exact path="/">
              <HomePage />
              {/* <Redirect from="/" to="/users" /> */}
            </Route>
            {/* <Route path="/users" exact>
              <UserListPage />
            </Route> */}
            <Route path="/brand" exact>
              <BrandPage />
            </Route>
            <Route path="/popular" exact>
              <PopularPage />
            </Route>
            <Route path="/products" exact>
              <ProductPage />
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
      </ChakraProvider>
    </BrowserRouter>
  );
}
