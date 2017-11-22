import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts } from '../reducer/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
	console.log("PRODUCTS",ProductList);
}

export default connect(mapStateToProps)(ProductList);