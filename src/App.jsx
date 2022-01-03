import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductApp from './pages/ProductPage';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import MaterialPage from './pages/MaterialPage';
import PopularPage from './pages/PopularPage';
import ShopPage from './pages/ShopPage';
import EmptyPage from './pages/EmptyPage';
import InstagramFooter from './components/layout/InstagramFooter';
import { ProductProvider } from './components/product/ProductContext';
import './styles/all.scss';

// reach router
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* <SimpleMap /> */}
        <Header />
        <Switch>
          <ProductProvider>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/products">
              <ProductApp />
            </Route>
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
            <Route path="/emptyPage" exact>
              <EmptyPage />
            </Route>
          </ProductProvider>
        </Switch>
        <div className="bg-gray">
          <InstagramFooter />
        </div>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}
