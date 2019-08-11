import React from 'react';
import Icon from './images/cart-icon.png';
import './css/style.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function CartIcon(props){
        // console.log(this.state.cartCount);        
        return (
            <div className="cart-button">
                <div className="cart-button__nofi">
                    <p className="bg-danger text-white">{props.cart}</p>
                </div>
                <div className="cart-button__icon">
                    <Link to="/cart"><img src={Icon} alt="shopping cart" width="50"/></Link>
                </div>
            </div>
        );    
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart.length
    }
}

export default connect(mapStateToProps)(CartIcon);