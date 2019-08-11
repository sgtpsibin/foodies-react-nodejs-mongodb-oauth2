import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import {getUser} from '../../store/actions/auth.action';
import {Link} from 'react-router-dom';
class Navbar extends Component {

	componentDidMount() {
		this.props.getUser('/api/current_user');			
	}

	renderLogin = () => {
		if(!this.props.user || this.props.user === {}){
			return (
				<li className="nav-item">
					<a className="nav-link p-2 bg-danger text-white" href="/auth/google">Login With Google </a>
				</li>
			)
		} else 
		return (
			<Fragment>
				<li className="nav-item text-white px-2">			
					Xin chào, {this.props.user.displayName}					
					<img src={this.props.user.image} className="rounded-circle mx-3" width="25px" alt="..."/>					
					<a href="/api/logout">Logout</a>
				</li>
			</Fragment>
		)
		
	}

	render() {
	
		
		return(
			<div className="container-fluid mx-0 mb-4">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
				<Link className="navbar-brand" to="/">FOODIES</Link>
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
			</div>
			);
	}

}

const mapStateToProps = (state) => {
	return {		
		user: state.auth.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (url) => dispatch(getUser(url))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);