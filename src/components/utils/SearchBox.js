import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logoImage from '../../img/download.png';


	export default class SearchBox extends React.Component {
    constructor() {
        super()
        this.onSearchChange = this.onSearchChange.bind(this)
        this.onClearSearch = this.onClearSearch.bind(this)
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                
                   <img src={logoImage} alt="logo" />
                    <input ref='search' className="hdinput typeAhead topSearch"  placeholder="Search by Product" style={{fontSize:"12px"}} name='search' type='text' defaultValue={this.props.search} value={this.state.search} onChange={this.onSearchChange } />
                    {(this.state.search||this.props.search)?<button onClick={this.onClearSearch} >Clear</button>:''}
                
            </div>
        )
    }

    onSearchChange() {
        let query = ReactDOM.findDOMNode(this.refs.search).value;
        if (this.promise) {
            clearInterval(this.promise)
        }
        this.setState({
            search: query
        });
        
    }

    onClearSearch() {
        this.setState({
            search: ''
        });
        
    }
}
