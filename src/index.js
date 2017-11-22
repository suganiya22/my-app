import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginForm';
import ProductCart from './components/ProductCart/ProductCart';
import { BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import cartReducer from './reducer/cart';
import productsReducer from './reducer/products';
import App from './App';
import productsData from './data/products';
import './css/main.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
   rootReducer,
    {
        products: productsData // initial store values
    }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
       <App>
       <Switch>
	      <Route exact path="/" component={LoginPage}/>
        <Route  path="/products" component={ProductCart}/>
		  </Switch>
      </App>
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();

