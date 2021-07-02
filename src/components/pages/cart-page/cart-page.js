import React,{Component} from 'react'
import './cart-page.css'
import { connect } from 'react-redux'
import ErrorIndicator from '../../error-indicator/error-indicator'
import Spinner from '../../spinner/spinner'
import getBooksThunkCreator from '../../../actions/index'
import withBookStoreService from '../../hoc/with-bookstore-service'
import { bookAddedToCart } from '../../../actions/index'


class CartPage extends Component {


  componentDidMount(){
    if(this.props.books.length===0){
    this.props.onFetching(this.props.bookstoreService)
    }
  }
  render(){
  const {onAddedToCart,match,books,error,loading}=this.props
  const {id}=match.params

    if(error){
      return <ErrorIndicator/>
    }
    if(loading){
      return <Spinner/>
    }
    else{
      return(
        <div>
          <div className="title-button">
           <h2>{books[id].title}</h2>
            </div>
            <div className="item">
              <div className="item-image">
               <img src={books[id].image} alt="cart"/>
               <button onClick={()=>onAddedToCart(books[id].id)} className="btn btn-info add-to-cart">Add to Cart</button>
              </div>
              <div className="item-descr">
                <div><b>Author</b> {books[id].author}</div>
                 <div><b>Price</b>  ${books[id].price}</div>
                 <div className="item-description">
                     <b>Description</b>
                     <div className="descr-text">{books[id].description}</div>
                  </div>
              </div>
      
            </div>
          </div>
          
      )
    }
 }
    
}
    


const mapStateToProps = ({books,error,loading}) => {
  return {
      books,
      error,
      loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      onFetching:(bookstoreService)=>{
       dispatch(getBooksThunkCreator(bookstoreService))
      },
      onAddedToCart:(id)=>{
        dispatch(bookAddedToCart(id))
      }
  }
} 
 
export default withBookStoreService()(connect(mapStateToProps,mapDispatchToProps)(CartPage))