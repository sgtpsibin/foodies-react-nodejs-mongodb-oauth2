import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getFoodById} from '../../store/actions/foodpage.action';
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
		if(this.state.foodCount>1) {
			document.querySelector('#count').value--;
			this.setState({foodCount:document.querySelector('#count').value});
		} else {
			document.querySelector('.foodCount__nofi').innerHTML = 'Must be larger than 1';
		}
		
			
	}
	changingMonitor = (event) => {
		if (event.target.value<1) {
			document.querySelector('.foodCount__nofi').innerHTML = 'Must be larger than 1';
		} else {
			document.querySelector('.foodCount__nofi').innerHTML = '';
		}
		this.setState({foodCount: event.target.value});	
		
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




	render() {
		const {food_image,food_price,food_name,food_description} = this.props.foodData;
		// console.log('re');
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
						<div className="foodCount">
							<button id="decrease" type="button" disabled={this.isDisabled()} className="btn btn-dark mr-1"  onClick={this.decreaseCount}>-</button>
							<input id="count" type="number" value={this.state.foodCount} readOnly className="foodCount__input"/>
							<button id="increase" type="button" className="btn btn-dark ml-1" onClick={this.increaseCount}>+</button>
							<p className="foodCount__nofi"></p>
						</div>
						<h3 className="text-danger my-3">{food_price*this.state.foodCount+'$'}</h3>
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