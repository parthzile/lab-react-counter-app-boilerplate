import {Component} from "react";

export default class CounterS extends Component{
  constructor(){
    super();
    this.state = {
        counter:0
    }
  }

  handleClick=(val)=>{
    this.setState({
        counter:this.state.counter + val
    })
  }

  handleReset=()=>{
    this.setState({
        counter:0
    })
  }

  render(){
    return (
      <>
      <h1>Counter using class : {this.state.counter} </h1>
      <button onClick = {()=>this.handleClick(1)}> INC </button>
      <button onClick = {()=>this.handleClick(-1)}> DEC </button>
       <button onClick = {this.handleReset}> RESET </button>
      </>
    )
}
}