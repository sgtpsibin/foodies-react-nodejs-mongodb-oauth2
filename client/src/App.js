import React from 'react';
import FoodList from './components/foodlist';
import Navbar from './components/navbar'


function App() {
  return (
  	<>
  		<div className="container-fluid mx-0">
  			<Navbar/>
  		</div>
	    <div className="container my-4">
	      <FoodList/>
	    </div>						
    </>
    );
}

export default App;
