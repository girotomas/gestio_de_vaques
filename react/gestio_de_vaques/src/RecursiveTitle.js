import logo from './logo.svg';
import './App.css';
import {app} from './AppDefinition'
import React from 'react'


export  class RecursiveTitle extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
  	if (this.props.app){
	    return <div>{
	    	Object.entries(this.props.app).map(
	    		function([keys, value]){
	      			return <RecursiveTitle app={value}>key</RecursiveTitle>
	    		}
	    	)
		}</div>
	}
	else{
		return <div></div>
	}
  }
}

