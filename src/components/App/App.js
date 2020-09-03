import React from 'react';
import './App.css';
import Profile from '../Profile/Profile'
import SearchProfile from '../SearchProfile/SearchProfile'
function App() {
  return (
    <div className="App">
      <SearchProfile/>
      <Profile/>
    </div>
  );
}

export default App;
