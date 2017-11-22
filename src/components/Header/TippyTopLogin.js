import React, { Component } from 'react';
import { BrowserRouter,Link,Route} from 'react-router-dom';
class TippyTopLogin extends Component{
	render(){
	 return(
        <div>
         <div id="myzone">
		        <span className="simple"><span style={{fontSize:"12px"}}><Link to="/login">Log In</Link></span>
				</span>
				
				<span className="simple"><a href="#"><span style={{fontSize:"12px"}}> CartZone℠</span>
				</a></span>
				</div>
          </div> 
		);
	}
}
export default TippyTopLogin