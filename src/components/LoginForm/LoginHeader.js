import React from 'react'
import PropTypes from 'prop-types'


class LoginHeader extends React.Component{
	render(){
		return(
	        <div className="login_header" style={{textAlign:"left",borderBottom:"1px dotted #ccc",margin:"5px"}}>      
		        <h4 style={{fontWeight:"bold"}}>MyZone
                    <sup className="supMarks" style={{left:"-8px"}}>℠</sup></h4>
					<div className="btmSpacerSm">
			            <h5 style={{lineHeight:"21px",fontSize:"14px",wordSpacing:"2px"}}>
						<strong>Welcome to MyZone, your go-to destination for everything AutoZone<sup className="supMarks2">®</sup> 
						where you can customize your account and manage your AutoZone<sup className="supMarks2">®</sup> Rewards
						<sup className="supMarks2">℠</sup> account!</strong></h5>
						<p style={{fontSize:"12px",fontWeight:"normal",color:"#ccc"}}>We're making things simple: AutoZone Rewards is now a part of MyZone!<br/>
                           Review your profile, track your purchase history and manage your benefits with one convenient login.</p>
			        </div>
            </div>			  
		
		
		);
		
	}
	
}

export default LoginHeader;

