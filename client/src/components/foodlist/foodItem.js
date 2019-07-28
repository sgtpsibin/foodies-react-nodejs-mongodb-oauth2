import React,{Component} from 'react';
import './css/style.css';
import {Link} from 'react-router-dom';


function slugify(string) {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
const generateUrl= (title,id) => {
	return slugify(title)+'.'+id
}
export default class FoodItem extends Component {
	render() {
		const foodUrl = generateUrl(this.props.title,this.props.id);
		return (
			<div className="col-lg-3 col-md-6 col-sm-6 mb-4">
				<div className="homeItem">	
					<div className="card bg-warning">
						<Link to={foodUrl}> <img className="card-img-top" src={this.props.img} width='100' height ='150' alt={this.props.title} /></Link>
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