import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Components/header/header.component';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div>
      <Route path='/' component={Header}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
