import React, { Component } from 'react';
import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';

class ProductCart extends Component {
  render() {
    return (
	<div>
			<div className="row">
                <div className="small-12 columns" style={{borderBottom:"1px dotted orange",backgroundColor:"rgb(243, 216, 187)"}}>
                    <h6 className="headerStyle">LATEST PRODUCTS</h6>
                </div>
            </div>
            <div className="row">
                <div style={{padding:"10px",boxShadow:"2px 2px 7px #ccc"}}className="small-8 columns">
                  <ProductList/>
                  
                </div>
                <div style={{padding:"10px",boxShadow:"2px 2px 7px #ccc"}} className="small-4 columns">
                   <Cart />
                </div>
            </div>
	</div>		
			);
  }
}

export default ProductCart;