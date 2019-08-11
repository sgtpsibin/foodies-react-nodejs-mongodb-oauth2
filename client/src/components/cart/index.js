import React,{Component} from 'react';
import {connect} from 'react-redux';

import CartItem from './cartItem';

class Cart extends Component {    

    renderCart = () => {
        if(this.props.cart.length===0) {
            return <p>No item in your cart</p>
        }
        else {
            return (
                this.props.cart.map(cartItem => <CartItem cart={cartItem}/>)                
            );
        
        }
    }

    render() {       
        // console.log(this.props.cart);
        return(
            <div className="container">
                <h1>Your Cart</h1>
                <hr/>
                {this.renderCart()}
           </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);