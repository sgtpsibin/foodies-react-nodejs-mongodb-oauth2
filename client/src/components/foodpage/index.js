import React,{Component} from 'react';
import { connect } from 'react-redux';

import {getFoodById} from '../../store/actions/foodpage.action';
import {addToCart} from '../../store/actions/cart.action';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './css/style.scss';


class FoodPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			foodCount: 1
		};
	}

	componentDidMount() {
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
	//Input Count
	increaseCount = () => {
		// this.setState(state=>{foodCount: state.foodCount++},(state)=>{document.getElementsByClassName('foodCount__input')[0].value = this.state.foodCount;});
		// this.forceUpdate();
		// document.querySelector('#count').value++;
		// this.isDisabled();
		// console.log('click');
		this.setState((state)=>{foodCount: state.foodCount++});
		this.forceUpdate();
		// document.querySelector('.foodCount__nofi').innerHTML = '';
	
		
	}
	decreaseCount = () => {
		// this.setState(state=>{foodCount: state.foodCount--},(state)=>{document.getElementsByClassName('foodCount__input')[0].value = this.state.foodCount;});
		// this.forceUpdate();	
		this.setState((state)=>{foodCount: state.foodCount--});
		this.forceUpdate();	
			
	}
	
	isDisabled = () => {
		// const count = document.querySelector("#count").value;
		if(this.state.foodCount<=1) {
			return true;
		}else {
			// console.log('false');
			return false;
		}		
	}
	//
	addToCart = () => {
		if (!this.props.user) {
			window.alert('Login first');
		} else {
			const food_count = this.state.foodCount;
			const food_sum_price = this.props.foodData.food_price * this.state.foodCount;
			let cartItem = {...this.props.foodData,food_count,food_sum_price};
			this.props.addToCart(cartItem);
			toast.success(`Added ${food_count} item to cart!`);

		}
	}




	render() {
		const {food_image,food_price,food_name,food_description} = this.props.foodData;
		// console.log('re');
		return (
			<div className="container mt-5">
				<div className="row mt-5">
				<ToastContainer 
					position="top-right"
					autoClose={2000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
				></ToastContainer>
				</div>
				<div className="row">
					<div className="col-lg-4 col-12">
						<div className="food-img">
							{this.props.isLoading ? this.loadingAnimation() : <img src={food_image} className="img-fluid"/>}
						</div>
					</div>

					<div className="col-lg-4 col-12">
						<h1>{food_name}</h1>
						<p>{food_description}</p>
						<div className="foodCount">
							<button  type="button" disabled={this.isDisabled()} className="btn btn-dark mr-1"  onClick={this.decreaseCount}>-</button>
							<input type="number" value={this.state.foodCount} readOnly className="foodCount__input"/>
							<button type="button" className="btn btn-dark ml-1" onClick={this.increaseCount}>+</button>
							<p className="foodCount__nofi"></p>
						</div>
						<h3 className="text-danger my-3">{food_price*this.state.foodCount+'$'}</h3>
						<button className="btn btn-dark" onClick={this.addToCart}>Ship me!</button>
					</div>

				</div> {/*end row*/}
			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		foodData: state.foodpage.foodData,
		isLoading: state.foodpage.isLoading,
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getFoodById: (id) => dispatch(getFoodById(id)),
		addToCart: (cartItem) => dispatch(addToCart(cartItem))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodPage);