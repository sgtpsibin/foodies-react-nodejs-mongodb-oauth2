import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getData} from '../../store/actions/foodlist.action';

class Pagination extends Component {

	renderPaginate = () => {
		let paginate=[];
		for(let i=1;i<=this.props.pages;i++) {
			paginate.push(
				<li key={i} className={`page-item ${(i==this.props.page) ? 'active' : ''}`}><button onClick={()=>{this.props.getData(`http://localhost:4000/api/get_food_data?page=${i}`)}} className="page-link">{i}</button></li>
			);
		}
		return paginate;
	}
	

	render() {
		return (
			<nav>
				<ul className="pagination">
					<li className={`page-item ${(this.props.page==1) ? 'disabled' : ''}`}>
					<button onClick={()=>{this.props.getData(`/api/get_food_data?page=${this.props.page-1}`)}} className="page-link" >Previous</button>
					</li>
					{this.renderPaginate()}
					<li className={`page-item ${(this.props.page==this.props.pages) ? 'disabled' : ''}`}>
					<button onClick={()=>{this.props.getData(`/api/get_food_data?page=${parseInt(this.props.page)+1}`)}} className="page-link" href="#">Next</button>
					</li>
				</ul>
			</nav>

			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData: (url) => dispatch(getData(url))
	}
}
export default connect(null,mapDispatchToProps)(Pagination);