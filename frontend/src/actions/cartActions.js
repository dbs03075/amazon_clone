import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, qty)=> async(dispatch, getState)=>{
    // action을 사용할 때에 첫번째에는 사용하는 인자, 두번째에는 리덕스에서 사용가능한 인자를 사용하는 것 같다.
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{ // payloda : 탑재화물, 탑재량
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
    // 위의 state를 실행하고 난 뒤 state를 추출하여 LocalStorage에 저장한다. 
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };