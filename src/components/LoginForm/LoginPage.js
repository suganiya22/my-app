import React from 'react'
import PropTypes from 'prop-types'
import LoginResetPage from './LoginResetPage';
import LoginHeader from './LoginHeader';
import LoginRegister from './LoginRegister';
import LoginApp from './LoginApp';

class LoginPage extends React.Component{
	constructor(props) {
    super(props);
    // Initialize / set state probably by fetching some info.
    this.state = {
      loginSelected: false
    };
  }
 render(){
     return(
	 <div className="login-page-container ">
	    <div className="row">
		    <div className="large-12 columns">
                <LoginHeader />  
            </div>  
		</div>
         <div className="row">		
            <div className="large-6 columns">
			<LoginApp /> 	
             <LoginResetPage />				
			</div>
            <div className="large-6 columns">
			    <LoginRegister />
            </div>
        </div>
    </div>		
   );
 }
}
export default LoginPage;	