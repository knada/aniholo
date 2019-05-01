import React from 'react';
import LogIn from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';
import CreatePost from './components/CreatePost/CreatePost';
import Brand from './components/Brand/Brand';
import './App.css';


function App() {
  return (
      <div className="App">
        <Brand style={{textAlign: "center"}} />
        <LogIn />
        <SignUp />
        <CreatePost />
      </div>
  );
}

export default App;
