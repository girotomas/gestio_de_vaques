import logo from './logo.svg';
import './App.css';
import {app} from './AppDefinition'
import React from 'react'
import {RecursiveTitle} from './RecursiveTitle'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {app: app}
  }

  render() {
    return <div>({
      Object.entries(this.state.app).map(function([key, value]){
       return <RecursiveTitle app={value}>key</RecursiveTitle>
      })
    })</div>
  }
}

export default App;
