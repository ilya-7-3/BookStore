import React from 'react';
import '../shopHeader/shopHeader.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { onOrderTotal } from '../../actions';
import { useEffect } from 'react';

const ShopHeader = ({cartItems,orderTotal,onOrderTotal}) => {
    useEffect(()=>{
        onOrderTotal()
    })
    return(
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
                <Link className="shopping-cart" to="/order">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {cartItems.length} items (${orderTotal})
                </Link>
        </header>
    )
}

const mapStateToProps =({cartItems,orderTotal})=>{
    return{
        cartItems,
        orderTotal
    }
}

const mapDispatchToProps={
    onOrderTotal
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopHeader)