import React from 'react'
import './Header.css'

const date = new Date().toDateString()
const img="https://picsum.photos/200/300"

let greeting
let customStyle={color:''}
const time =new Date().getHours()

if(time<12){
    greeting="Morning"
    customStyle.color='green'
}
else if(time<18){
    greeting="Evening"
    customStyle.color='yellow'

}
else{
    greeting="Night"
    customStyle.color='blue'

}

const handleClick = ()=>{
  console.log("You clicked me!")
}

const Header = () => {
  return (
    <div>
      <h1 className='head'>Today's date is {date}</h1>
      <img src={img} alt="" />
      <h3 style={customStyle}>Good {greeting} India!</h3>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default Header
