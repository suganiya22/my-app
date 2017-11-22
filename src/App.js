import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import ProductCart from './components/ProductCart/ProductCart';
import LoginScreen from './containers/LoginScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
		<div className="container">
		  {this.props.children}
        
		</div>
      </div>
    );
  }
}

export default App;
