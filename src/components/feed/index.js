import React, { Component } from 'react';
import './feed.css';
class Feed extends Component {
  state = {
  	'userCardsArray': []
  }
  componentDidMount() {
  	fetch('https://jsonplaceholder.typicode.com/users')
	  .then(response => response.json())
	  .then(json => this.handleResponse(json))
  }
  handleResponse(json){
  	let userCardsArray = [];
  	for(var i in json){
  		userCardsArray.push(
  			<div className="userCardsContainer" key={`userCardItem${i}`}>
  				<div className="profilePicContainer">
  					<div className="outerProfileContainer">
  						<span>
  						{`${json[i].name[0]} ${json[i].name.split(' ')[1][0 ]}`}
  						</span>
  					</div>
  				</div>
  				<div>
  				{json[i].name}
  				</div>
  				<div>
  				{json[i].email}
  				</div>
  				<div>
  				{json[i].address.city}
  				</div>
  			</div>
  		);
  	}
  	this.setState({ userCardsArray });
  }
  render() {
    return (
      <div className="feedContainer">
        <p>Feed</p>
        <div className="userCardsParent">
        {this.state.userCardsArray}
        </div>
      </div>
    );
  }
}

export default Feed;