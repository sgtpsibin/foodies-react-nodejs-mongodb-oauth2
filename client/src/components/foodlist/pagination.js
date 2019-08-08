import React,{Component} from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import {getData} from './../../store/actions/foodlist.action';
import './css/paginate.css';


const PAGINATE_API_URL = process.env.REACT_APP_API_URL+'get_food_data';

class Pagination extends Component {

	handlePageClick = (data) => {
		const {selected} = data
		this.props.getData(PAGINATE_API_URL+`?page=${selected+1}`);
	}

	
	
	
// ()=>{this.props.getData(PAGINATE_API_URL+`?page=${parseInt(this.props.page)+1}`)}



	render() {

			
		return (
			// <h1>Paginate</h1>
			<ReactPaginate 
				pageCount={this.props.pages}
				pageRangeDisplayed={2}
				marginPagesDisplayed={2}
				containerClassName={'paginate-container'}
				onPageChange={this.handlePageClick}
				activeClassName={'active'}
			/>			
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData: (url) => {dispatch(getData(url))}
	}
}
export default connect(null,mapDispatchToProps)(Pagination);