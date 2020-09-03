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
            <div> Search Profile 
                <input type="text" name="username"  onKeyDown={this.handleKeyDown} 
                value={this.state.username} onChange={this.handleChange}  />
            </div>
        )
    }
    
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            username = this.vale
        }
    }
    handleChange(event){
        this.setState({username : event.target.value})
    };
};
export default SearchProfile