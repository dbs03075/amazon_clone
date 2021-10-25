import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


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
                <Link to="/cart">Cart
                {cartItems.length > 0 &&(
                    <span className="badge">{cartItems.length}</span>
                )}</Link>
                <Link to="/signIn">Sign in</Link>
            </div>
            </header>

            <main>
                {/* <HomeScreen></HomeScreen>                 */}
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route exact path="/" component={HomeScreen}></Route>
                <Route exact path="/product/:id"  component={ProductScreen}></Route>
            </main>
            <footer className="row center"> All right reserved</footer>
        </div>
    </Router>
    );
}

export default App;