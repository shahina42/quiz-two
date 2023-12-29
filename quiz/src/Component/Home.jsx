import React, { Component } from 'react'
import './style.css'




export default class Home extends Component {

stateChanging=()=>{
  console.log(this.props.props1)
  this.props.props1(1)
}

  render() {
    return (
      <>
     <div className='pg1'>
     <h2>Quiz App</h2>
    <button className='play_btn' onClick={()=>this.stateChanging()}>Play</button>
   </div>
      </>
    )
  }
}







