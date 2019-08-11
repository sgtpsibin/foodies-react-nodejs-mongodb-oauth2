import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import {getData} from './../../store/actions/foodlist.action';
import './css/paginate.css';


const PAGINATE_API_URL = process.env.REACT_APP_API_URL+'get_food_data';

function Pagination(props) {

	const handlePageClick = (data) => {
		const {selected} = data
		props.getData(PAGINATE_API_URL+`?page=${selected+1}`);
	}

	
	
	
// ()=>{this.props.getData(PAGINATE_API_URL+`?page=${parseInt(this.props.page)+1}`)}



	

			
		return (
			// <h1>Paginate</h1>
			<div className="col">
				<ReactPaginate 
					pageCount={props.pages}
					pageRangeDisplayed={2}
					marginPagesDisplayed={2}
					containerClassName={'paginate-container'}
					onPageChange={handlePageClick}
					activeClassName={'active'}
				/>	
			</div>		
		)
	}

const mapDispatchToProps = (dispatch) => {
	return {
		getData: (url) => {dispatch(getData(url))}
	}
}
export default connect(null,mapDispatchToProps)(Pagination);