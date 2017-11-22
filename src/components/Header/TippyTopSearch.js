import React, { Component } from 'react';
import SearchBox from '../utils/SearchBox';
import DisplayList from '../utils/DisplayList';


class TippyTopSearch extends Component{
	constructor(props){
	super(props);
	this.state={
      query:'',
      filteredData: this.props.data
	}
	};
	
    doSearch(queryText){
      var queryResult=[];
      this.props.data.forEach(function(x){
          if(x.name.toLowerCase().indexOf(queryText)!==-1)
            queryResult.push(x);
      });
      this.setState({
        query:queryText,
        filteredData:queryResult
      })
    };
    
    render(){
      
      return(
      <div>
	    <SearchBox query={this.state.query} doSearch={this.doSearch} />
        <DisplayList data={this.state.filteredData}/>
      </div>
      );
    }
    
  }
  export default TippyTopSearch