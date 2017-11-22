import React from 'react'
import PropTypes from 'prop-types'


class LoginResetPage extends React.Component{
	render(){
		return(
	     <div className="login_reset" style={{margin:"10px"}}>      
		 <form>
		  <div className="grid-x grid-padding-x" style={{float:"left"}}>
			<div className="small-9 cell">
			  <label htmlFor="right-label" >Forgot Password ?</label>
			</div>
			<div className="small-9 cell">
			  <label htmlFor="right-label" style={{color:"red",fontWeight:"normal"}} >Reset your Passoword</label>
			</div>
			<br/>
			<div className="small-12 cell">
			  <label htmlFor="right-label" >Forgot your AutoZone Rewards Password ?</label>
			</div>
			<div className="small-9 cell">
			  <label htmlFor="right-label" style={{fontWeight:"normal"}}>Call for help: (800) 741-9179</label>
			</div>
		 </div>
		</form>				
        </div>
 			
		);
		
	}
	
}

export default LoginResetPage;

