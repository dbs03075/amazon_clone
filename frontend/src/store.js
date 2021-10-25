import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {productDetailsReducer, productListReducer} from './reducers/productReducers';

// applyMiddleWare는 미들웨어를 사용하기 위한 모듈?
// 미들웨어란, 액션과 리듀서 사이에 존재합니다. 특정 액션을 가하고 리듀서가 처리하긱 전에 작업을 처리합니다.

// redux
// react-redux
// redux-thunk : dispatch에게 함수 형식을 대처하게 끔 함
// redux-promise : dispatch에게 프로미스 형식을 대처하게 끔 함

// compose  compose는 순차적으로 함수를 적용해나가는 gulp의 pipe 같은 역할을 입니다. 미들웨어를 사용할 때 적용해주면 좋습니다.

// 기본적인 reducer를 통해서 data를 state 값으로 설정해준다. 
const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
    }
};

// reducer를 다른 파일을 통해 들고 온다.
// reducer의 값을 콤바인리듀서를 통해 다른 곳에 퍼져있는 reducer를 통합한다.
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
});
// 그리고 여기서 중요한 부분은 !!!! combineReducer를 통해 나오는 reducer가 
// return하는 state는 combineReducer에서 설정하는 key내에 존재하게 되는 것이다. 
// 따라서 만약 useSelector을 들고와서 state 값을 사용하려고 한다면, state.productList를 사용하여야 되는 것이다. 

// default reducer
// const reducer = (state, action)=>{
//     return {products : data.products}
// }

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = devTools || compose; // ||는 or 연산자로 만약에 devTools가 없다면 compose를 할당하라는 의미이다.


// createStore를 통해서 reducer를 등록해준다.
// composeEnhancer(applyMiddleware(thunk)) 이를 통해 크롬 extension에서 state를 확인할 수 있게 되었다.
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;