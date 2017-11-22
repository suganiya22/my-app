import React from 'react';
import { connect } from 'react-redux';
import './LoginApp.css';

class LoginApp extends React.Component {
	constructor(props) {
		super(props);
		this.state={};
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		let { isLoginSuccess, isLoginFailure, isLoginPending } = this.props;
		let { email, password } = this.state;
	return (
	<div className="login_app" style={{textAlign:"left"}}>  
        <h5 className="rewardsH4">Returning Customers</h5>
            <p className="p_text">Log in with your MyZone or AutoZone Rewards information.<br/>
             help you link your accounts. </p> 	
	<form name="loginForm" onSubmit={this.onSubmit} className="log-in-form">
		<label>Email
			<input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
	    </label>
		<label>Password
			<input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
		</label>
		<input id="show-password" type="checkbox"/><label htmlFor="show-password">Show password</label>
		<p style={{textAlign:"right"}}><input type="submit" className="button " value="Login"></input></p>
		<p className="text-center"><a href="#">Forgot your password?</a></p>
		<div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { isLoginFailure && <div>{isLoginFailure.message}</div> }
        </div>
      </form>
	</div>  
		);
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(e,this.state);
		let { email, password } = this.state;
		this.props.login(email, password);
        
		this.setState({
			email: '',
			password: ''
		});
	}
}

export default LoginApp;


