import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App(props){
    
    return(
        
    <Router>
        <div className="grid-container">
            <header className="row">
            <div>
                <a href="index.html" className="brand">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signIn">Sign in</a>
            </div>
            </header>

            <main>
                {/* <HomeScreen></HomeScreen>                 */}
                <Route exact path="/" component={HomeScreen}></Route>
                <Route exact path="/product/:id"  component={ProductScreen}></Route>
            </main>
            <footer className="row center"> All right reserved</footer>
        </div>
    </Router>
    );
}

export default App;