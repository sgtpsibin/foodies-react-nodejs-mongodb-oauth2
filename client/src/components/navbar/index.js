import React, {Component,Fragment} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {fetchUser} from '../../store/actions/foodlist.action';

class Navbar extends Component {

	componentWillMount() {
		this.props.fetchUser('/api/current_user');				
	}

	renderLogin = () => {
		if(!this.props.userName){
			return (
					<li className="nav-item">
							<a className="nav-link p-2 bg-danger" href="/auth/google">Login With Google </a>
					</li>
			)
		}
		return (
			<Fragment>
			<li className="nav-item text-white">			
				Xin chào, {this.props.userName}					
			</li>
			<li className="nav-item ml-5">				
				<img src={this.props.userImage} className="rounded-circle" width="25px"/>					
			</li>
			<li className="nav-item ml-5">
				<a href="/api/logout">Logout</a>
			</li>
			</Fragment>
			)

			
		
	}

	render() {

		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
				<a className="navbar-brand" href="#">FOODIES</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
						<a className="nav-link" href="/">#Item 1 <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="/">#Item 2</a>
						</li>			
					</ul>
					<ul className="navbar-nav">
						{this.renderLogin()}
					</ul>				
				</div>							
			</nav>

			);
	}

}

const mapStateToProps = (state) => {
	return {
		userName: state.foodlist.user.displayName,
		userImage: state.foodlist.user.image
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: (url) => dispatch(fetchUser(url))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);