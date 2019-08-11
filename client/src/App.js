import React from 'react';
import FoodList from './components/foodlist';
import Navbar from './components/navbar';
import FoodPage from './components/foodpage';
import Cart from './components/cart';
import CartIcon from './components/cart/cartIcon';
import requireAuth from './components/hoc/requireAuth';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.scss';


function App() {
  return (
  	<>
      <BrowserRouter>   
        <div>
          <Navbar/>        
          <Switch>
            <Route exact path="/" component={FoodList}/> 
            <Route exact path="/cart" component={requireAuth(Cart)}/> 
            <Route path="/*.:id" component={FoodPage}/> 
          </Switch>  
          <CartIcon/>      
	      </div>
      </BrowserRouter>
    </>
    );
}

export default App;
