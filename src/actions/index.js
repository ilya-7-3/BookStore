
const booksRequested = () => {
    return{
        type:'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return{
        type:'FETCH_BOOKS_SUCCESS',
        payload:newBooks
    };
};

const booksError = (error) => {
    return{
        type:'FETCH_BOOKS_FAILER',
        payload:error
    }
}

const bookAddedToCart = (bookId) => {
    return{
        type:'BOOK_ADDED_TO_CART',
        payload:bookId
    }
}

const bookIncrement = (bookId) => {
    return{
        type:'BOOK_INCREMENT',
        payload:bookId
    }
}

const bookDecrement = (bookId) => {
    return{
        type:'BOOK_DECREMENT',
        payload:bookId
    }
}

const bookDelete = (bookId) => {
    return{
        type:'BOOK_DELETE',
        payload:bookId
    }
}


const onOrderTotal= () => {
    return{
        type:'BOOK_TOTAL_ORDER'
    }
}


const getBooksThunkCreator =(bookstoreService)=>{
    return (dispatch)=>{
        dispatch(booksRequested());
        bookstoreService.getBooks()
        .then((data)=>dispatch(booksLoaded(data)))
        .catch((err)=>dispatch(booksError(err)))
        }
        
}

export default  getBooksThunkCreator




export {
    booksLoaded,
    booksRequested,
    booksError,
    bookAddedToCart,
    bookIncrement,
    bookDecrement,
    bookDelete,
    onOrderTotal
}
