import { CART_ADD_ITEM, CART_REMOVE_ITEM  } from "../constants/cartConstants";

// cart:
// cartItems: Array(2)
// 0: {name: 'Nike Slim Shiet', image: '/images/p2.jpg', price: 120, countInStock: 10, product: '3', …}
// 1: {name: 'Nike Slim Shiet', image: '/images/p1.jpg', price: 120, countInStock: 5, product: '1', …}
// length: 2
// [[Prototype]]: Array(0)
// [[Prototype]]: Object
// productDetails:
// loading: false
// product: {_id: '2', name: 'Adidas Slim Shiet', category: 'Shirts', image: '/images/p1.jpg', price: 120, …}
// [[Prototype]]: Object
// productList:
// loading: false
// products: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// [[Prototype]]: Object
// [[Prototype]]: Object
// 여기서 return 하는 값은 cart의 value로 들어가게 되는 것이다. 
export const cartReducer = (state={cartItems:[]}, action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            console.log(state); // 여기 state는 comine된 reducer에서는 오직 해당 state key에만 접근가능하다. 
            const item = action.payload; // productId의 data
            const existItem = state.cartItems.find(x => x.product === item.product); // 지금 들어간게 똑같은 건지 확인
            // 이 중에서 바로 cart라는 state에 접근할 수 밖에 없거cartItem에 접근할 수 있음.           
            // cart:
            // cartItems: Array(2)
            // 0: {name: 'Nike Slim Shiet', image: '/images/p2.jpg', price: 120, countInStock: 10, product: '3', …}
            // 1: {name: 'Nike Slim Shiet', image: '/images/p1.jpg', price: 120, countInStock: 5, product: '1', …}

            // 여기 다시 이해 확인 필요된다.
            if (existItem){
                return {
                    // js rest parameter와 spread operator
                    ...state,
                    cartItems: state.cartItems.map((x)=>
                    x.product === existItem.product ? item :x),
                };
            } else {
                return {...state, cartItems: [...state.cartItems, item]};
            } 
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        default:
            return state;
        
    }
}