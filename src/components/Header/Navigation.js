import React, { Component } from 'react';


class Navigation extends Component{
	render(){
		return(
		    <ul className="menu vertical medium-horizontal expanded medium-text-center dropdown" style={{backgroundColor:"#f37f00"}}>
					<li className="has-submenu " role="menuitem" tabIndex="0" title="Tech" aria-haspopup="true"><a href="#" tabIndex="-1">AutoParts</a>
					</li>
					<li className="has-submenu " role="menuitem" tabIndex="0" title="Energy" aria-haspopup="true"><a href="#" tabIndex="-1">Interior Accesories</a>
					</li>
					<li className="has-submenu " role="menuitem" tabIndex="0" title="Space" aria-haspopup="true"><a href="#" tabIndex="-1">Exterior Accesories</a>
					</li>
					<li className="has-submenu " role="menuitem" tabIndex="0" title="Medicine" aria-haspopup="true"><a href="#" tabIndex="-1">Truck Towing</a>
					</li>
					<li className="has-submenu " role="menuitem" tabIndex="0" title="Robotics" aria-haspopup="true"><a href="#" tabIndex="-1">Tools Equipments</a>
					</li>
					<li className="has-submenu" role="menuitem" tabIndex="0" title="Tesla" aria-haspopup="true"><a href="#" tabIndex="-1">Performance</a>
					</li>
			</ul>
         
       );
     }
			
}
export default Navigation