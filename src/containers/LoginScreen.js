import React from 'react'
import { connect } from 'react-redux';
import LoginApp from '../components/LoginForm';
import {login,reducer} from '../reducer/login'

	
const mapStateToProps = (state) => {
       return {
		isLoginPending: state.isLoginPending,
		isLoginSuccess: state.isLoginSuccess,
		isLoginFailure: state.isLoginFailure
  };
}

const mapDispatchToProps = dispatch => {
	console.log("Dispatch Actions",dispatch);
 		return{
			login:(email, password) => {dispatch(login(email,password))}
	 
     }
  }

export default connect(mapStateToProps,mapDispatchToProps)(LoginApp);

	
