import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
const {linearSearch, binarySearch} = require('./searches')

class App extends Component{
  state= {
    binaryCounter:0,
    linearIndex:-1,
    binaryIndex:-1,
    linearCounter:0,
    array:[],
    currentAdd:"",
    valueSeeker:""
  }
  handleSubmit= (event)=>{
    event.preventDefault()
  }
  handleValueSeeker = (event)=>{
    const valueSeeker = parseFloat(event.target.value)
    this.setState({valueSeeker})
  }
  handleCurrentAdd= (event)=>{
    const currentAdd = event.target.value
    this.setState({currentAdd})
  }
  addNumber =(event)=>{
    event.preventDefault()

    const currentAdd = parseFloat(this.state.currentAdd)

    const myArr = [...this.state.array]
    myArr.push(currentAdd)
    const myArrSorted = myArr.sort((a,b)=>{return a-b})
    
    this.setState({
      array:[...myArrSorted],
      currentAdd:""
    })
  }
  runSearch=(event)=>{
    event.preventDefault()
    const bsResult = binarySearch(this.state.array,this.state.valueSeeker)
    const linearResult = linearSearch(this.state.array,this.state.valueSeeker)
    this.setState({
      binaryCounter:bsResult[0],
      linearCounter:linearResult ===-1?this.state.array.length:parseFloat(linearResult)+1,
      linearIndex:linearResult,
      binaryIndex:bsResult[1]
    })
  }
  render(){
    return (
    <div>
        <h1>Search Master</h1>
        <h2>Inputs</h2>
        <form onSubmit={this.handleSubmit}>
          <legend>Input value here</legend>
          <br/>
          <label htmlFor="js_currentAdd" >Add a value to array: </label><br/>
          <input onChange={this.handleCurrentAdd} type="number" name="js_currentAdd" id="js_currentAdd" value={this.state.currentAdd}></input>
          <button onClick={this.addNumber} >Add Number to Array</button>
          <br/><br/>
          <label htmlFor="js_valueSeek" >Search for this value</label><br/>
          <input onChange={this.handleValueSeeker} value={this.valueSeek} type="number" name="js_valueSeek" id="js_valueSeek"/>
          <button onClick={this.runSearch} >Run My Search</button>
        </form>
        <h2>Outputs</h2>
        <div>
          <h3>Counter</h3>
          <p>Binary Search Counter:{this.state.binaryCounter}</p>
          <p>Linear Search Counter:{this.state.linearCounter}</p>
          <h3>Array View</h3>
          <p>Array-sorted: {this.state.array.length===0?'[]':`[${this.state.array}]`}</p>
          <h3>Index</h3>
          <p>{`The location of ${this.state.valueSeeker} in ${this.state.array.length===0?'[]':`[${this.state.array}]`}`}</p>
          <p>{`Result Linear : ${this.state.linearIndex}`}</p>
          <p>{`Result Binary : ${this.state.binaryIndex}`}</p>
        </div>
    </div>)
  }
}

export default App;
