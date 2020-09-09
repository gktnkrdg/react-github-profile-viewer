import React, { Component } from "react";
import './App.css';
import Profile from '../Profile/Profile'
import SearchProfile from '../SearchProfile/SearchProfile'
class App extends Component {
  constructor(props) {
    super(props);
    this.searchUser = this.searchUser.bind(this);
    this.state ={
       user : ''
    }
  }
  searchUser(username) {
    fetch('https://api.github.com/users/'+username)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({user:data})
    })
  }
  render(){
    return (
      <div className="App">
        <SearchProfile searchUser={this.searchUser}/>
        <Profile user={this.state.user}/>
      </div>
    );
  }
 
}

export default App;
