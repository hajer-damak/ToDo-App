import React, { Component } from 'react'
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state={
      input:'',
      items:[{text:'item1', valid:false},{text:'item2', valid:false},{text:'item3', valid:false}]
    }}
  
  handleChange = (e) => {
    this.setState({
      input : e.target.value
    })
  }

  addItems = () => {
    this.setState ({
      items : [{text:this.state.input},...this.state.items]
    })
  }

  handleDelete = (indice) =>{
    this.setState ({
      items : this.state.items.filter((el,key)=> (key !== indice))
    })
  }

  handleComplete = (id) =>{
    this.setState ({
      items: this.state.items.map((el,index)=> (index===id)? {...el,valid: !el.valid } : el)
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="content">
            <h1>To-Do App!</h1>
            <p>Add New To-Do</p>
            <input type='text' className='input-content' placeholder='Enter new task'
            value= {this.state.input}
            onChange= {this.handleChange}/>
            <button type='button' id='add-button' onClick={this.addItems}>Add</button>
          </div>
          <h2 className="title">Let's get some work done!</h2>
          <div>
            {this.state.items.map((el, index) =>
            <div className="items">
              <button className='items-button' onClick={()=> this.handleComplete(index)}>{(el.valid)? "undo" : "complete" }</button>
              <button className='delete items-button' onClick={()=> this.handleDelete(index)}>Delete</button>
              <p style={{textDecoration:(el.valid)&&"line-through" }}>{el.text}</p>
            </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
