import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



class Product extends React.Component{
	handleClick=()=>{
		
		const { id, addToCart, removeFromCart, isInCart } = this.props;
		
	     if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }	
		
		
		
	}	
	render(){
		const { name, price, currency, image, url, isInCart } = this.props;
         var img_width={
			 width:"60%"
		 } ;
		return(
	        <div className="product_thumbnail">      
		        <img style={img_width} src={image} alt="product"/>
           	  <div className="caption">
                    <h6>
                        <a style={{fontSize: "13px",color: "orange",textTransform:"uppercase"}}  href={url}>{name}</a>
                    </h6>
                <div className="product_price">{price} {currency}</div>
                <div className="product_btnWrap">
                    <button className={isInCart ? 'alert button small':'button small'}
					    onClick={this.handleClick} 
					
					>	
                    {isInCart ?'Remove from Cart':'Add to Cart'}
                    </button>	
                </div>
     		  </div>
            </div>			  
		
		
		);
		
	}
	
	
	
}


Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}
export default Product;