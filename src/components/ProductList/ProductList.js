import React, { PropTypes } from 'react';
import Product from '../../containers/Product';
import PagingPanel from '../Paging/PagingPanel';
const ProductList =({products})=>{
	 const { rows, count, page, sorting, search } = products;
	 const { loadProducts,changePage } = products;

	if (!products) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="product-preview">
        No products...
      </div>
    );
  }

	return(
	<div>
	    <h6 className="sample-style">List of Products ----------</h6>
        <ul className="product-list">

        
		{products.map(product=>(
             <li key={product.id} className="product-list_item">
                <Product {...product}/>
            </li>
        ))}
		</ul>
		<PagingPanel count={count} page={page} onNextPage={() => {
            changePage(page+1);
            loadProducts() }} 
            onPreviousPage={ () => {
            changePage(page-1);
            loadProducts()
        }}/>
    </div> 		
	
	
	);
}	
	
	
	
	
	

export default ProductList;	