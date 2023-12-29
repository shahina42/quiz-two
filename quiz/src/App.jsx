import React, { Component } from 'react'
import Home from './Component/Home'
import Quiz from './Component/Quiz'
import Result  from './Component/Result'




export default class App extends Component {

constructor(){
  super();
  this.state={
    pageNo:0
  }
}

updatestate=(page)=>{
  console.log(this.state.pageNo)
  this.setState(()=>{
    return {
      pageNo:page
    }
  })
}

  render() {

    if(this.state.pageNo==0){
      return(
        <Home props1={this.updatestate}/>
      )
    }
    else if (this.state.pageNo==1){
      return(
        <Quiz props1={this.updatestate}/>
      )
    }
    else if (this.state.pageNo==2){
      return(
        <>
        <Result props1={this.updatestate}/>
        </>
      )
    }

  }
}

