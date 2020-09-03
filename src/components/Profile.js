import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "gökten",
        surname: "karadağ"
      };
    }

    render = () => {
      return <div> Profile </div>
    }
}
export default Profile
  