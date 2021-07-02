const initialState={
    books: [],
    loading:true,
    error:null,
    cartItems:[],
    orderTotal:0,
};

const reducer = (state=initialState, action) => {
    let items=[]
    switch(action.type){
        case 'FETCH_BOOKS_REQUEST':
                return{
                    ...state,
                    books:[],
                    loading:true,
                    error:null
                }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books:action.payload,
                loading:false,
                error:null
            }
        case 'FETCH_BOOKS_FAILER':
            return{
                ...state,
                books:[],
                loading:false,
                error:action.payload
            }
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload
            let book=state.cartItems.find((book)=>book.id===bookId)
            let newItem={}
          
        if(!book){
            book=state.books.find((book)=>book.id===bookId)
            newItem={
                    id:bookId,
                    name:book.title,
                    count:1,
                    price:book.price,
                    total:book.price
                }
                return{
                    ...state,
                    cartItems:[
                        ...state.cartItems,
                        newItem
                    ]

                }
                
                
        }
        else {

            items=[...state.cartItems]
            items.forEach((book)=>{
                book.count++
                book.total+=book.price
            })

            return{
                ...state,
                cartItems:[
                    ...items
                ]
            }
        }
      
        case 'BOOK_INCREMENT':
            items=[...state.cartItems]
            items.forEach((book)=>{
                if(book.id===action.payload){
                    book.count++
                    book.total+=book.price
                }
            })

            return{
                ...state,
                cartItems:[
                    ...items
                ]
            }

            case 'BOOK_DECREMENT':
                items=[...state.cartItems]
                items.forEach((book)=>{
                    if(book.id===action.payload && book.count>1){
                        book.count--
                        book.total-=book.price
                    }
                })
    
                return{
                    ...state,
                    cartItems:[
                        ...items
                    ]
                }
    
                case 'BOOK_DELETE':
                    items=[...state.cartItems]
                    items.splice(action.payload,1)
                    return{
                        ...state,
                        cartItems:[
                            ...items
                        ]
                    }
        
                    case 'BOOK_TOTAL_ORDER':
                        let orderTotal=0;
                        state.cartItems.forEach((book)=>{
                            orderTotal+=book.total
                        })
                        return{
                            ...state,
                            orderTotal
                        }

        default:
            return state;   
        }
};




export default reducer;