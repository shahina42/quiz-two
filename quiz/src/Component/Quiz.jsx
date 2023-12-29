import React, { Component } from 'react'
import './style.css'
import quizQuestions from '../../resources/quizQuestion.json'

export default class  extends Component {

  constructor(){
      super()

      this.state = {
          data : quizQuestions,
          ind : 0
      }
  }

  next = () => {
      if(this.state.ind == 14){
          console.log(this.props.props1)
          this.props.props1(2)
      }
      this.setState(()=>{
          return{
            ind : this.state.ind+1
          }
        })
  }

  previous = () => {

      if(this.state.ind == 0){
          alert("There is no previous questions!")
          this.setState(()=>{
              return{
                ind : this.state.ind = 1
              }
            })
      }

      this.setState(()=>{
          return{
            ind : this.state.ind-1
          }
        })
  }

  quit = () => {
      alert('Are you sure you want to quit?')
      this.setState(()=>{
          return{
            ind : this.state.ind = 0
          }
        })
  }


  render() {
    return (
      <>
         <div className='div2'>
    <div className='pg2'>
        <h2>Question</h2>
      <div className='pg_no'>{this.state.ind+1} of 15</div>
        <h3>{this.state.data[this.state.ind].question}</h3>
        <div className='buttons'>
        <button className='btn1'>{this.state.data[this.state.ind].optionA}</button> <button className='btn2'>{this.state.data[this.state.ind].optionB}</button>
           <button className='btn3' >{this.state.data[this.state.ind].optionC}</button> <button className='btn4' >{this.state.data[this.state.ind].optionD}</button>
      
        </div>
        <div className='three_btn'>
            <button className='btn7' onClick={this.previous}>Previous</button>
            <button className='btn5'onClick={this.next}>Next</button>
            <button className='btn6'onClick={this.quit}>Quit</button>
        </div>


    </div>
    </div>
      </>
    )
  }
}



