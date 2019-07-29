import React,{Component} from 'react';
import FoodItem from './foodItem';
import {connect} from 'react-redux';
import {getData} from '../../store/actions/foodlist.action';
import Pagination from './pagination';

class FoodList extends Component {
	
	componentWillMount() {
		this.props.getData(process.env.REACT_APP_API_URL+'get_food_data');
	}

	loadAnimation = () => (
		<div className="foodloader spinner-border text-warning" role="status">
  			<span className="sr-only">Loading...</span>
		</div>
	)

	loadItem = () =>(
		 this.props.data.data.map(food=>
				<FoodItem id={food._id} key={food._id} title={food.food_name} price={food.food_price}
					img={food.food_image} description={food.food_description}/>)
				
	)

	render() {
		
		return (
			<div className="container">
				<div className='row mb-4'>
					{this.props.isLoad && this.loadAnimation()}
					{!this.props.isLoad && this.props.data.data && this.loadItem()}		
					
				</div>
				<Pagination pages={this.props.data.pages}/>		
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoad: state.foodlist.loading,
		data: state.foodlist.foodData
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getData: (url) => dispatch(getData(url))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodList);