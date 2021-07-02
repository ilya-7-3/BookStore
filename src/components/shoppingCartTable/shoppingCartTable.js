import React from 'react';
import { connect } from 'react-redux';
import './shoppingCartTable.css'
import { bookIncrement,bookDecrement,bookDelete} from '../../actions';

const ShoppingCartTable = ({cartItems,orderTotal,onIncrease,onDecrease,onDelete}) => {
    
    const elements=cartItems.map((el,idx)=>{
        return(
            <tr key={idx}> 
            <td>{idx+1}</td>
            <td>{el.name}</td>
            <td>{el.count}</td>
            <td>{el.total}</td>
            <td>
                <button onClick={()=>onIncrease(el.id)} className="btn btn-outline-success btn-sm">
                    <i className="fa fa-plus"/>
                </button>
                
                <button onClick={()=>onDecrease(el.id)} className="btn btn-outline-warning btn-sm">
                    <i className="fa fa-minus"/>
                </button>

                <button onClick={()=>onDelete(idx)} className="btn btn-outline-danger btn-sm" >
                    <i className="fa fa-trash"/>
                
                </button>
            </td>
            </tr>
        )
    })
    if(cartItems.length===0){
       return(
        <div className="basket-empty"> 
            <i className="fa fa-shopping-cart fa-5x"/>
        <h2>Your basket is empty</h2>
        </div>
       )
    }else{

    
    return(
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
            <thead>
                <tr>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
           {elements}
           </tbody>
            </table>

            <div className="total">
            Total:${orderTotal}
            </div>
        </div>
    )
    }
}

const mapStateToProps = ({cartItems,orderTotal}) =>{
    return{
        orderTotal,
        cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease:(id)=>{
            dispatch(bookIncrement(id))
        },
        onDecrease:(id)=>{
            dispatch(bookDecrement(id))
        },
        onDelete:(id)=>{
            dispatch(bookDelete(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable)