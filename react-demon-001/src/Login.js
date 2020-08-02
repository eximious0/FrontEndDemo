import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

export default function Login() {

  const history = useHistory();

  return (
    <div className="App">
      <h1>This is Login Page.</h1>
      <Button onClick={()=>{
        history.push('/')
      }} >Back to Home Page</Button>
    </div>
  );
}

