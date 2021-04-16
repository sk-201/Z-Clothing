import React from 'react';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_page.component';
import Header from './components/header/header.component';
import SignInandSignup from './pages/signinandsignuppage/sign-in-and-sign-up-page.component';

import './App.css';
function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}></Route>
      <Route exact path='/signin'component={SignInandSignup}></Route>
      </Switch>
    </div>
  );
}

export default App;
