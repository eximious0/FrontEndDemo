import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './App.css';

function CustProfile() {

  const params = useParams();  

  return (
    <div className="App">
      <h1>The passed in params are: {JSON.stringify(params)}</h1>
      <h1>This is Customer Profile Page, Customer id is :{params.custId} </h1>
      <Link to="/">Return to Home page</Link>
    </div>
  );
}

export default CustProfile;
