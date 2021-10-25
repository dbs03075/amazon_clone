// 이해가 안 되는 부분...? 이건 뭐지???
// listProducts의 함수 부분이 왜 2개이고 dispatch가 어떻게 작동하는 것인지????


import Axios from "axios";
import { PROCUCT_DETAILS_FAIL, PROCUCT_DETAILS_REQUEST, PROCUCT_DETAILS_SUCCESS, PROCUCT_LIST_FAIL, PROCUCT_LIST_REQUEST, PROCUCT_LIST_SUCCESS } from "../constants/productConstants"
// export 와 export default의 차이로 인해 {}가 필요함

// listProduct를 import 하고 있는것은 HOMESCREEN이다. 
// Q. dispatch는 어디서 들고 오는 것인가? 이렇게 마음대로 사용해도 되는 것인가.?
export const listProducts = ()=> async(dispatch)=>{
    dispatch({
        type : PROCUCT_LIST_REQUEST
    });
    try {
        const {data} = await Axios.get('/api/products');
        dispatch({type:PROCUCT_LIST_SUCCESS, payload: data});
    } catch(error){
        dispatch({type:PROCUCT_LIST_FAIL, payload: error.message});

    }

    
};

export const detailsProduct = (productId) => async (dispatch)=>{
    dispatch({type: PROCUCT_DETAILS_REQUEST, payload: productId});
    try{
        const {data} = await Axios.get(`/api/products/${productId}`);
        dispatch({type:PROCUCT_DETAILS_SUCCESS, payload:data});
    } catch(error){
        dispatch({
            type: PROCUCT_DETAILS_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }

}