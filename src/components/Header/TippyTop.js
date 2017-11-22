import React from 'react';

export const TippyTop = props => (
	
	 <h6 style={{color:"red",fontSize:"15px",fontWeight:"bold"}}>
	    {props.tippyTopBoldText}
		<small style={{color:"#333",fontWeight:"normal"}} >{props.tippyTopText}</small>
	</h6>
		
);
	

