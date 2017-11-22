import React from 'react';
import {TippyTop} from './TippyTop';
import TippyTopLinks from './TippyTopLinks';
import TippyTopLogin from './TippyTopLogin';
import TippyTopAds from './TippyTopAds';
import TippyTopSearch from './TippyTopSearch';
import Navigation from './Navigation';
import image1 from '../../img/image1.png';
import image2 from '../../img/image2.png';
import image3 from '../../img/image3.png';
import image4 from '../../img/image4.png';

export default class Header extends React.Component{
	render(){
		var tableData=[
	{
		name:'Vechicles',
	  
	},
	{
		name:'Battery',
	   
	},
	{
		name:'Fluid',
	  
	}];
		return(
		<header>
			<div className="row top-bar" style={{backgroundColor:"#fff",borderBottom:"2px solid #333"}}>
			<TippyTop tippyTopBoldText="FREE GROUND SHIPPING - NO MIMIMUM " tippyTopText="- In-stock items and ship-to-home only ."/>
			</div>
			<div className="row" style={{backgroundColor:"#f3f3f3"}}>
			   <div className="small-10 columns">
			   <TippyTopLinks/>
			   </div>
			   <div className="small-2 columns">
			   <TippyTopLogin/>
			   </div>
			</div>
			<div className="row">
				<div className="medium-4 columns">
				<TippyTopSearch data={tableData}/>
				</div>
				<div className="line medium-2 columns ">
					<div id="manage-vehicles" className="header-block">
					<img style={{width:"40%",height:"50px",float:"left"}} src={image4} /> 
					  <h6 className="inheritStyle"><strong className="simple">My Vehicles</strong></h6>
					<span style={{fontSize:"12px",color:"#F26100"}}>Add Vehicle</span>
				</div>
				</div>
				<div className="line medium-2 columns ">
					<div id="manage-stores" className="header-block">
					<img style={{width:"45%",height:"50px",float:"left"}} src={image3} /> 
					  <h6 className="inheritStyle"><strong className="simple">Find Stores</strong></h6>
                      <span style={{fontSize:"12px",color:"#F26100"}}>Add Store</span>
					</div>
				</div>
				<div className="line medium-2 columns ">
					<div id="manage-rewards" className="header-block">
					<img style={{width:"30%",height:"50px",float:"left"}} src={image2} /> 
						<h6 className="inheritStyle"><strong className="simple">My Rewards</strong></h6>
					<span style={{fontSize:"12px",color:"#F26100"}}>Add Reward</span>
					</div>
				</div>
				<div className="line medium-2 columns ">
					<div id="manage-cart" className="header-block">
					  <img style={{width:"50%",height:"50px",float:"left"}} src={image1} /> 
					  <h6 className="inheritStyle"><strong className="simple">My Cart</strong></h6>
					<span style={{fontSize:"12px",color:"#F26100"}}>Add Cart</span>
					</div>
				</div>
			</div>
			<div className="row">
			    <div className="large-12 columns top-bar" id="main-menu">
					<Navigation/>
				</div> 
			</div>
			<div className="row" style={{height:"50px"}}>
				<div className="large-12 columns pencilAdsBg">
				    <TippyTopAds/>
				</div> 
			</div>
        </header>
		
		);
		
	}
	
}