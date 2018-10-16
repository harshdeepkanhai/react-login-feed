import React, { Component } from 'react';
import './login.css';
class Login extends Component {
	state ={
		'userName':'',
		'password':''
	}
	handleUserNameChange(e){
		this.setState({'userName': e.target.value});
	}
	handlePasswordChange(e){
		this.setState({'password': e.target.value});	
	}
	handleLogin(){
		if(this.state.userName.length === 0 || this.state.password.length === 0){
			alert("Enter valid values");
		} else {
			this.props.changeCurrentComponent("login");
		}
	}
 	render(){
 		return(
 			<div className="loginContainer">
 			<div className="formContainer">
	 			<div className="usernameContainer">
		 			<span>Username:</span>
		 			<input 
			 			type="text"
			 			value={this.state.userName} 
			 			onChange={(e)=>this.handleUserNameChange(e)}/> 
			 	</div>
		 		<div className="passwordContainer">
		 			<span>Password:</span>
		 			<input 
			 			type="password"
			 			value={this.state.password} 
			 			onChange={(e)=>this.handlePasswordChange(e)}/> 
			 	</div>
			 	<div className="loginButtonContainer">
			 		<button onClick={() => this.handleLogin()}>Login</button>
			 	</div>										
 			</div>
 			</div>
 		);
 	}
}

export default Login;
