import React,{Component} from 'react';
import './css/style.css';

export default class FoodItem extends Component {
	render() {
		return (
			<div className="col-lg-3 col-md-6 col-sm-6 mb-4">
				<div className="homeItem">	
					<div className="card bg-warning">
						<img className="card-img-top" src={this.props.img} width='100' height ='150' alt={this.props.title} />
						<div className="card-body">
							<h5 className="card-title">{this.props.title}</h5>
							<p className="card-text text-danger font-weight-bold">{`${this.props.price}$`}</p>
							<p className="card-text item-description">{this.props.description}</p>
						</div>
					</div>
				</div>
			</div>
			)
	}
}