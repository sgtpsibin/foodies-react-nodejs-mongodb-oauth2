import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getFoodById} from '../../store/actions/foodpage.action';
import './css/style.css';

class FoodPage extends Component {

	componentWillMount() {
		const {id} = this.props.match.params
		this.props.getFoodById(id);
	}

	loadingAnimation = () => {
		return (
			<div className="food-page-loading">
				<div className="spinner-border text-warning" role="status">
				<span className="sr-only">Loading...</span>
				</div>
			</div>
		)
	}


	render() {
		const {food_image,food_price,food_name,food_description} = this.props.foodData;
		return (
			<div className="container mt-5">
				<div className="row">

					<div className="col-lg-4 col-12">
						<div className="food-img">
							{this.props.isLoading ? this.loadingAnimation() : <img src={food_image} className="img-fluid"/>}
						</div>
					</div>

					<div className="col-lg-4 col-12">
						<h1>{food_name}</h1>
						<p>{food_description}</p>
						<h3 className="text-danger my-3">{food_price+'$'}</h3>
						<button className="btn btn-dark">Ship me!</button>
					</div>

				</div> {/*end row*/}
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		foodData: state.foodpage.foodData,
		isLoading: state.foodpage.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getFoodById: (id) => dispatch(getFoodById(id))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodPage);