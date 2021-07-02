import React from "react"
import HomePage from '../pages/home-page/home-page'
import CartPage from '../pages/cart-page/cart-page'
import {Route, Switch} from 'react-router-dom';
import ShopHeader from '../shopHeader/shopHeader'
import OrderPage from "../pages/order-page/order-page";

const App = () => {
    return(
        <div className="container">
            <ShopHeader/>
            <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/cart/:id' component={CartPage}/>
            <Route path='/order' component={OrderPage}/>
            </Switch>
        </div>)
}

export default App