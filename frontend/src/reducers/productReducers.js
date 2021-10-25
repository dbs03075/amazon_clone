import { PROCUCT_DETAILS_FAIL, PROCUCT_DETAILS_REQUEST, PROCUCT_DETAILS_SUCCESS, PROCUCT_LIST_FAIL, PROCUCT_LIST_REQUEST, PROCUCT_LIST_SUCCESS } from "../constants/productConstants";


// reducer는 인자를 state랑 action값을 받음. action값은 dispatch를 통해 들어오게 된다. 
// reducer의 return 값이 state를 설정한다.
// 처음 인자에 state값을 주면서 state를 설정한다.
// 이하의 state는 두 가지 key를 가지는데 첫 째는 loading이고 둘째는 products이다. 
export const productListReducer = (state = {loading: true, products : []}, action)=>{
    // 만약 action.type가 ~라면 
    switch(action.type){
        case PROCUCT_LIST_REQUEST:
            return {loading:true}; // loading을 true로 만들어 로딩이 일어나게 한다. 
        case PROCUCT_LIST_SUCCESS:
            return {loading:false, products:action.payload}; 
            // product list가 성공적으로 다운받아졌다면 dispatch에서 보낸 payload값을 products에 넣게 하여 state 값을 설정한다;
        case PROCUCT_LIST_FAIL:
            return {loading: false, error:action.payload};
            // 성공적으로 다운받아지지 않았다면 error를 state에 등록한다. 
        default:
            return state;
        
    }
}

export const productDetailsReducer = (state = {product:{}, loading:true}, action)=>{
    switch(action.type){
        case PROCUCT_DETAILS_REQUEST:
            return {loading : true};
        case PROCUCT_DETAILS_SUCCESS:
            return {loading:false, product:action.payload}; 
            // product list가 성공적으로 다운받아졌다면 dispatch에서 보낸 payload값을 products에 넣게 하여 state 값을 설정한다;
        case PROCUCT_DETAILS_FAIL:
            return {loading: false, error:action.payload};
            // 성공적으로 다운받아지지 않았다면 error를 state에 등록한다. 
        default:
            return state;
    }
}