import React, { useEffect } from "react";
import Product from '../components/Product';
// import axios from 'axios';
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from 'react-redux';   
import { listProducts } from '../actions/productActions';

export default function HomeScreen(){
    
    const dispatch = useDispatch();
    console.log(dispatch);
    console.log('success');
    // useState를 통해 product, loading, error라는 state를 지정
    // const [products, setProducts] = useState([]); // react hook 이게 무엇인지 확실히 할 필요 요구됨
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const productList = useSelector((state)=> state.productList);
    const {loading, error, products} = productList;


    // useEffect의 마지막 부분이 default로 지정되어 있을 경우 처음 한 번만 실행된다.
    // 이를 통해 data를 백엔드로 부터 성공적으로 불러오게 되면, 불러오는 사이에 loading을 통해 사이를 매꾼다.
    // 그리고 axios를 통해 백의 데이털를 불러오고 products에 해당 데이터를 저장한다.
    // 반대로 error가 발생할 경우 setError을 통해 에러 메시지를 state error에 담는다.
    useEffect(()=>{
        // const fetchData = async()=>{
        //     try{
        //         setLoading(true);   
        //         const { data } = await axios.get('/api/products');
        //         setLoading(false);
        //         setProducts(data);
        //     } catch(err){
        //         setLoading(true);
        //         console.log(err.message);
        //         setError(err.message);
        //         setLoading(false);
        //     }
            
        // };
        // fetchData();
        dispatch(listProducts());
    }, [dispatch]); // https://reacttraining.com/blog/when-to-use-functions-in-hooks-dependency-array/


    // 로딩 인 경우-> loading이 true인 경우 loadingBox -> 스테이트가 변경될때 마다 재실행되는 것을 알 수 있다.
    // loading이 false일 경우 error이 true인지 false인지 확인한다.
    // 만약 false 일 경우 messagebox를 통해 error 메시지를 보여준다.
    // 이 위의 모든 부분에 해당하지 아니하면 
    // product를 통해 product들을 보여주는 것으로 마무리된다. 
    return(
    <div>
        {loading ? (<LoadingBox></LoadingBox>)
        :
        error?(<MessageBox variant="danger">{error}</MessageBox>):
        (
            <div className="row center">
                {products.map((product)=>(
                <Product key={product._id} product={product}></Product>
                ))}
            </div>
        )}
        
    </div>

    )   
}