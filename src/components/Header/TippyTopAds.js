import React from 'react';

class TippyTopAds extends React.Component{
    render(){
		const PencilAdsLeft=(props)=>(
            <span style={tipStyle}>{props.lText}</span>
        );
		const PencilAdsMid=(props)=>(
			<span style={tipStyle}>Use CODE:{props.rCode}</span>
		);
		const PencilAdsRight=(props)=>(
			<span style={tipStyle}>See Details:{props.linkText}</span>
		);
		let tipStyle = {
		 padding: "2px",
		 background:"#f2f2f2",
		 margin: "2px",
		 fontStyle:"italic",
		 fontWeight:"bold",
    };
     return(
		<div>
		   <PencilAdsLeft  lText="20% ON ORDERS OVER $100."/>
		   <PencilAdsMid rCode="TAX206"/>
		   <PencilAdsRight linkText=">>"/>
		</div>
      );
          
    }
    
  }
export default TippyTopAds
           
      
  
	

  