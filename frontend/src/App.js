import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';


function App(props){
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    
    return(
        
    <Router>
        <div className="grid-container">
            <header className="row">
            <div>
                <Link to="/" className="brand">amazona</Link>
            </div>
            <div>
            {/* Link
            Link는 html의 a태그라고 생각하시면 됩니다. 그런데 a태그를 사용하지 않고 Link Component를 사용하는 이유는 a태그를 사용할 경우 페이지를 새로고침 시키기 때문입니다. Link Component를 이용하면 새로고침없이 페이지를 변경해줄 수 있습니다. 주의사항으로 Link Component는 Router안에서만 동작합니다.
            Link to(string)
            Link의 to property를 통해 보낼 URL을 string 으로 적어줍니다.
            Link to(Object)
            Link의 to property를 통해 보낼 URL을 Object로 전달합니다. Object의 pathname에 URL을 적어주면 됩니다. 다만 string으로 전달하는 to와 다른점은 변수를 전달할 수 있다는 겁니다. Object의 state에 담긴 정보가 그대로 URL에 할당된 Component의 props로 전달됩니다. 좀 헷갈릴 수 있으므로 자세한 내용을 따로 다루도록 하겠습니다. */}
                <Link to="/cart">Cart
                {cartItems.length > 0 &&(
                    <span className="badge">{cartItems.length}</span>
                )}</Link>


                <Link to="/signIn">Sign in</Link>
            </div>
            </header>

            <main>
                {/* <HomeScreen></HomeScreen>                 */}
                {/* Route는 path property와 현재 URL을 비교하여 현재 URL에 path property가 포함되면 component property에 할당된 Component나 Route 태그 안쪽에 적힌 코드를 보여주게 됩니다 */}
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route exact path="/" component={HomeScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route exact path="/product/:id"  component={ProductScreen}></Route>
            </main>
            <footer className="row center"> All right reserved</footer>
        </div>
    </Router>
    );
}

export default App;