import React from 'react';
import FoodList from './components/foodlist';
import Navbar from './components/navbar';
import FoodPage from './components/foodpage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
  	<>
      <BrowserRouter>   
        <div>

  			<Navbar/>
        
        <Switch>
          <Route exact path="/" component={FoodList}/> 
          <Route path="/*.:id" component={FoodPage}/> 
        </Switch>        
	      </div>
      </BrowserRouter>
    </>
    );
}

export default App;
