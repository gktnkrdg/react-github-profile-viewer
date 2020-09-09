import React, { Component } from "react";

export class Profile extends Component {
  render() {
    {
     
        return (
          this.props.user &&
          <div class="profile-card">
            <div >
              <img class="profile-avatar" src={this.props.user.avatar_url} alt="Logo" />
            </div>
            <div class="profile-item"> {this.props.user.name}</div>
            <div class="profile-item"> {this.props.user.bio}</div>
            <div class="profile-item"> {this.props.user.location}</div>
            <div class="profile-item"> Following:{this.props.user.following} Followers:{this.props.user.followers} Repos:{this.props.user.public_repos} </div>  
          
            <div class="profile-item"> {this.props.user.created_at}</div>
          </div>
        );
      
      
    }
  }
}
export default Profile;
