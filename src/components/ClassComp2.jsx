import React, { Component } from 'react'

export default class ClassComp2 extends Component {
    constructor(props){
        super(props)
        console.log("ClassComp2 constructor")
    }
    componentDidMount(){
        console.log("ClassComp2 componentdidmount")
    }

    componentDidUpdate(){
        console.log("ClassComp2 ComponentDidUpdate")
    }
     
    
  render() {
    console.log("ClassComp2 Render")
    return (
      <div>
       <h1>Hello {this.props.name} - Child</h1>
      </div>
    )
  }
}
