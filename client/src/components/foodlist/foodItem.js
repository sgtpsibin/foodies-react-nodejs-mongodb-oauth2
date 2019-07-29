import React,{Component} from 'react';
import './css/style.css';
import {Link} from 'react-router-dom';


const generateSlug = (title,id) => {   
    
    //Đổi chữ hoa thành chữ thường
    let slug = title.toLowerCase(); 
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, " - ");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    
    return slug+'.'+id;
}

export default class FoodItem extends Component {
	render() {
		const foodUrl = generateSlug(this.props.title,this.props.id);
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