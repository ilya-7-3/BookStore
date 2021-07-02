import React,{Component} from 'react'
import { connect } from 'react-redux'
import withBookStoreService from '../hoc/with-bookstore-service'
import './book-list-item.css'
import { withRouter } from 'react-router-dom'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'
import { bookAddedToCart } from '../../actions'
import getBooksThunkCreator from '../../actions'

class BookListItem extends Component  {

    componentDidMount(){
        if(this.props.books.length===0){
       this.props.fetchBooks()
    }
}
    
    render(){
    const {onAddedToCart,history}=this.props;
    const booksItem = this.props.books.map(function(el,i){
        return(
            <li className="book-list-item" key={i}>
            <div className="book-image">
                <img src={el.image} alt="book"/>
            </div>
            <div className="book-details">     
                <div onClick={()=>onChooseItem(history,el.id)} to='/carts' className="book-title">{el.title}</div>
                <div className="book-author">{el.author}</div>
                <div className="book-price">${el.price}</div>   
                <button onClick={()=>onAddedToCart(i)} className="btn btn-info add-to-cart">Add to Cart</button>
            </div>
            </li>
        )
    })

    if(this.props.error){
        return(<ErrorIndicator/>)
    }
    if(this.props.loading){
        return(<Spinner/>)
    }
    else{
        return(
            <div>
                <h1>Popular books</h1>
                <ul className="book-list">
                    {booksItem}
                </ul>
            </div>
        )
    }
    
 
}
}

const mapStateToProps = ({books,loading,error}) => {
    return {
        books,
        loading,
        error
    }
}

const onChooseItem = (history,id)=>{
    const newPath =`/cart/${id}`;
    history.push(newPath)
}

const mapDispatchToProps = (dispatch,ownProps)=> {
    const {bookstoreService} = ownProps;
    return{
        fetchBooks:()=>{
        dispatch(getBooksThunkCreator(bookstoreService))
        }
        ,
        onAddedToCart:(id)=>{
            dispatch(bookAddedToCart(id))
        }
    }
}

export default withRouter(withBookStoreService()(connect(mapStateToProps,mapDispatchToProps)(BookListItem)))