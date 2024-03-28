import React, { Component } from 'react'
import ClassComp2 from './ClassComp2'

export default class ClassComp1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Jayce'
        }
        console.log("ClassComp1 constructor")
    }
    componentDidMount(){
        console.log("ClassComp1 componentdidmount")
    }

    componentDidUpdate(){
        console.log("ClassComp1 ComponentDidUpdate")
    }
     changeState=()=>{
        this.setState({
            name:"Asha"
        })
    }
  render() {
    console.log("ClassComp1 Render")
    return (
      <div>
       <h1>Hello {this.state.name}</h1>
       <button onClick={this.changeState}>Change State</button>
      <ClassComp2  name={this.state.name}/>
      </div>
    )
  }
}
