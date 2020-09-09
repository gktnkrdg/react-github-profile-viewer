import React, { Component } from 'react'


 class SearchProfile extends Component {
   
   
    constructor(props){
        super(props);
        this.state = {username : ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
       }
     
    render() {
        return (
            <div>
                <input class="search-input" type="text" name="username"  onKeyDown={this.handleKeyDown} 
                value={this.state.username} onChange={this.handleChange} placeholder="Search Github User"  />
            </div>
        )
    }
    
  
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(this.state.username)
            this.props.searchUser(this.state.username);
            this.setState({username:''})
        }   
    }
    handleChange(event){
        this.setState({username : event.target.value})
    };
};
export default SearchProfile