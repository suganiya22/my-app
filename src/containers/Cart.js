import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { getItems, getCurrency, getTotal } from '../reducer/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Cart);