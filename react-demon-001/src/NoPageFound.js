import React from 'react';
import './App.css';

export default function NoPageFound() {

  const myStyle = {
    color:'red'
  }

  return (
    <div className="App">
      <h1 style={myStyle}>Page not found! Please check the URL you input.</h1>
    </div>
  );
}

