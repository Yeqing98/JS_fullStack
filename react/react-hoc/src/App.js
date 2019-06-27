import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ExampleMobx from './exampleMobx/index'
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import base from './examplebase/index';
import ExampleDebounce from './ExampleDebounce/index';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <React.Fragment>
      <LoginStatus></LoginStatus>
      <ShopCart></ShopCart>
      {/* <WithLoginStatus></WithLoginStatus>
      <WithShopCart a="1" b="2"></WithShopCart> */}
      <ExampleMobx></ExampleMobx>
      <ExampleDebounce></ExampleDebounce>
    </React.Fragment>
  );
}

export default App;
