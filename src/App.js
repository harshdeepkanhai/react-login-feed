import React, { Component } from 'react';
import './App.css';

import Login from './components/login/index.js';
import Feed from './components/feed/index.js';
class App extends Component {
  state = {
    'currentComponent':[]
  }
  componentWillMount(){
    let currentComponent = [];
    currentComponent.push(
      <Login 
        key={"loginComponent"} 
        changeCurrentComponent={this.changeCurrentComponent.bind(this)}
        />
      );
    this.setState({ currentComponent });
  }
  changeCurrentComponent(componentValue){
    let currentComponent = [];
    if(componentValue === 'login'){
        currentComponent.push(
           <Feed 
           key={"feedComponent"} 
           changeCurrentComponent={this.changeCurrentComponent.bind(this)}
           /> 
        )
    }
    this.setState({ currentComponent });
  }
  render() {
    return (
      <div className="App">
        {this.state.currentComponent}
      </div>
    );
  }
}

export default App;