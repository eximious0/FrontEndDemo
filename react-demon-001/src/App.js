import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import './App.css';
import 'antd/dist/antd.css'

function App() {

  const [age, setAge] = useState(35)

  //The second param "[]" is to disable the invoke of this method in every data refresh, it will only invoke one time, 
  //It's more like componentDidMount in this case.
  useEffect(()=>{
    console.log("useEffect invoked")
    setAge(100)
  },[])
  
  /*
  //But if we don't have the second param "[]", the method will invoked every time when the data changed,
  //It's more like componentDidUpdate  
  useEffect(()=>{
    console.log("useEffect invoked")
    setAge(100)
  })
  */

  return (
    <div className="App">
      <p>This is the default page of the demo of how to use React Router</p>   
      <Link to="/login">To Login Page</Link> 
      <br/>  
      <Link to="/custProfile/:custId">To Profile Page</Link>   
      <br/>
      <h1>My current age is: {age}</h1>
      <Button onClick={() => {setAge(age+1)}} >Increase Age</Button>
    </div>
  );
}

export default App;
