import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem';

const Cart=({items,total,currency})=>{
	return(
	    <div>
            <h6 className="sample-style">Cart List ---------</h6>
                <div className="panel panel-default">
                    <div className="panel-body">
						{items.length > 0 && (
							<ul>
							{items.map(item=>(
							<li style={{listStyleType:"cjk-heavenly-stem",textTransform:"uppercase",fontSize:"12px",textAlign:"left",fontWeight:"bold",color:"rgb(242, 97, 0)"}} key={item.id}>
									<CartItem {...item}/> 						
								</li>
							))}
							</ul>
						)}
						{items.length===0 && (
						    <div className="alert-info">CART EMPTY</div>
						)}
                        <div className="cart_total">Total: {total} {currency}</div> 						
                    </div>			
                </div>
        </div>    				
	
	
	);
	
	
	
}	
Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string
}
export default Cart;