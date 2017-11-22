import React, { Component } from 'react';

class DisplayList extends Component{
	
    render(){
	
		  var datas=[];
		  this.props.data.forEach(function(lists){
		  datas.push(lists.name);
		 });
    return (
      <span style={{fontSize:"12px",fontColor:"#f2f2f2",display:"inline-block",marginLeft:"15px"}}>Ex. 04 Camry Battery See More Examples</span>
    );
    }
}	
export default DisplayList