import React from 'react';
import './App.css';

class SkillSet extends React.Component {
  state = {
      val: '',
      list: []
    } 

  valueChangeHandler = (event) => {
    let val = event.target.value;
    this.setState({
      val
    })
  }

  onClickHandler = () => {
    let {val, list} = this.state
    list.push(val)
    this.setState({
      val: '',
      list
    })
  }

  removeItemHandler = (props) => {
    let {list} = this.state
    list.pop()
    this.setState({
      list
    })
  }

  render() {
    return <div className="App">
      <p>This is a classical define of React Component</p>
      <h1>Hello Long Hui</h1>
      <h1>You are the greast architect in the world!!!</h1>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <input onChange={this.valueChangeHandler} value = {this.state.val}/>
      <button onClick={this.onClickHandler}>Add</button>
      <br/>
      <button onClick={this.removeItemHandler}>Remove Last</button>
    </div>
  }

}

export default SkillSet;
