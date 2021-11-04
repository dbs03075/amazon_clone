import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";


// 현재 지금의 방식은 data가 굳이 backend를 통해 들고올 필요가 없다. 
export default function ProductScreen(props){
    console.log(props);
    const dispatch = useDispatch();
    const productId = props.match.params.id; //파라미터에서 id 추출
    const [qty, setQty] = useState(1); // 이 함수 내에서 스테이트 사용하는 거임
    console.log(useSelector((state)=>state));
    const productDetails = useSelector((state)=> state.productDetails); // 통합된 스토어의 스테이트 사용
    const {loading, error, product} = productDetails;
    // const product = data.products.find((x) => x._id === props.match.params.id) // what is that mean? that's mean is exactly same user inter router path="/product/:id"
    // if(!product){
    //     return <div> Product Not Found</div>;
    // }
    console.log(productDetails);

    // useEffect가 무엇인지 확인 필요
    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch, productId]);

    const addToCartHandler = ()=>{
        //부모-자식 component 관계가 아닌, routing으로 특정 페이지에서 다른 페이지로 이동 할때도 props를 넘겨줄 수 있는 방법
        props.history.push(`/cart/${productId}?qty=${qty}`) // 이동하는 url
    }

    return(
        <div>
        {loading ? (<LoadingBox></LoadingBox>)
        :
        error?(<MessageBox variant="danger">{error}</MessageBox>):
        (
            <div>
                <Link to="/">Back to Result</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                            </li>                        
                            <li>
                                Price : ${product.price}
                            </li>
                            <li>
                                Description: <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {product.countInStock > 0 ? (
                                                <span className="success">In Stock</span>
                                            ) : (
                                                <span className="error">Unavailable</span>
                                            )}
                                        </div>
                                    </div>
                                </li>
                                {
                                    product.countInStock > 0 && (
                                        <>
                                            <li>
                                                <div className="row">
                                                    <div>Qty</div>
                                                    <div>
                                                        <select value={qty}
                                                        onChange={(e)=>setQty(e.target.value) }>
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x)=>(
                                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                                )
                                                            )}
                                                        </select>

                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li>
                                                <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                {/* <button onClick={isItWork}>isItWork</button> */}
            </div>
        )}
        
        </div>
        
    )
}