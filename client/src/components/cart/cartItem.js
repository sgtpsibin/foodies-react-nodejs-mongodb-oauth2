import React,{Component} from 'react';

class CartItem extends Component {
    state = {
        food_count: this.props.food_count,
        food_price: this.props.food_price,
        food_sum_price: this.props.food_sum_price,
        food_image: this.props.food_image,
        food_name: this.props.food_name
    }
    render() {    
        const {food_count,food_price,food_sum_price,food_image,food_name} = this.props.cart;
        return (
            <div className="row mb-3">
               <div className="cart-item col-lg-7 col-12 p-3 border rounded">

                   <div className="row">
                        <div className="col">
                            <img className="cart-item__img" src={food_image} alt={food_name} width="100"/>
                            <h3>{food_name}</h3>
                        </div>
                        <div className="col">
                            <input type="number" defaultValue={food_count} min={1} onChange={console.log('AA')}/>
                        </div>
                        <div className="col">
                            <h4 className="text-danger">{food_sum_price}$</h4>
                        </div>
                   </div>

               </div>
            </div>
        );
    }
}
export default CartItem;