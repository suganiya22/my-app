import React from 'react'
import PropTypes from 'prop-types'


class LoginRegister extends React.Component{
 render(){
     return(
    <div className="login-register" style={{paddingLeft: "15px", paddingRight: "0",margin:"5px"}}>
	<h5 className="rewardsH4 topSpacer">Create a MyZone Account	</h5>
		<p className="p_text">Create a MyZone account and personalize your online AutoZone experience with
		vehicle-specific repair guides, vehicle care tips, and more. We'll link it with AutoZone
		Rewards for more benefits and discounts.</p>
		<form>
		  <div className="grid-x grid-padding-x">
			<div className="small-3 cell">
			  <label htmlFor="right-label" >First Name</label>
			</div>
			<div className="small-9 cell">
			  <input type="text" style={{fontSize:"12px"}}  placeholder="Enter FirstName"/>
			</div>
			<div className="small-3 cell">
			  <label htmlFor="right-label" >Password</label>
			</div>
			<div className="small-9 cell">
			  <input type="text" style={{fontSize:"12px"}}   placeholder="Enter Password"/>
			</div>
			<div className="small-3 cell">
			  <label htmlFor="right-label" >Email</label>
			</div>
			<div className="small-9 cell">
			  <input type="text" style={{fontSize:"12px"}}   placeholder="Enter Email"/>
			</div>
			<div className="small-3 cell">
			  <label htmlFor="right-label" >Location</label>
			</div>
			<div className="small-9 cell">
			  <input type="text"style={{fontSize:"12px"}}   placeholder="Enter Location"/>
			</div>
			<div className="small-9 cell" style={{textAlign:"right"}}><button type="button" className="button">Register</button></div>
		  </div>
		</form>				
   	</div>
   );
 }
}
export default LoginRegister;	