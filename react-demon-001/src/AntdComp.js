import React from 'react';
import {Input, Button, Select} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
const {Search} = Input;
const Option =Select.Option;

class AntdComp extends React.Component {
  state = {
      val: '',
      list: [],
      options: []
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

  onSearchHandler = (value) => {
    console.log("Search Value is: "+value)
    let {options} = this.state
    options.push(value)
    this.setState({
      options
    })
  }

  render() {

    return <div className="App">
      <p>This is a Component from ant design</p>
      <h1>Hello Long Hui</h1>
      <h1>You are the greast architect in the world!!!</h1>
      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <Input onChange={this.valueChangeHandler} value = {this.state.val} style={{width: 300}}/>
      <Button onClick={this.onClickHandler} type="primary">Add</Button>
      <br/>
      <Button onClick={this.removeItemHandler}>Remove Last</Button>
      <br/>
      <br/>
      <Search style={{width: 400}} enterButton="Add Option" placeholder="input add text" onSearch={this.onSearchHandler}/>
      <br/>
      <Select style={{width: 400}}>
        {
          this.state.options.map((item, index) => {
            return <Option key={index}>{item}</Option>
          })
        }
      </Select>
    </div>
  }

}

export default AntdComp;
