import "./styles.css"
import Button from "./components/Button"
import ClearButton from "./components/ClearButton"
import Input from "./components/Input"
import { useState } from "react"


function App() {

 const [input, setInput] = useState("")
 const [prevNum, setPrevNum] = useState("")
 //const [currNum, setCurrNum] = useState("")
 const [operator, setOperator] = useState("")

 const addToInput = val => {
   setInput(input + val)
 }
 const addZeroToInput = val => {
   if(input ){
    setInput(input + val)
   }
 }

 const addDecimalToInput = val => {
   if( typeof input !== "string"){
     setInput("0.")
   } 
  // console.log(typeof input);
   else if(input.indexOf(".") === -1){
    setInput(input + val)
     }
     
}


 const clearInput = () => {
   setInput("")
   //setCurrNum("")
   setPrevNum("")
   setOperator("")
 }

 const add = () => {
   setPrevNum(input)
   setInput("")
   setOperator("add")
   
 }

 const subtract = () => {
  setPrevNum(input)
  setInput("")
  setOperator("subtract")
 }

 const divide = () => {
  setPrevNum(input)
  setInput("")
  setOperator("divide")
 }

 const multiply = () => {
  setPrevNum(input)
  setInput("")
  setOperator("multiply")
 }

 

 const evaluate = () => {
   
   if(operator === "add"){
    // setCurrNum(input)
     
     setInput((parseFloat(prevNum) + parseFloat(input)).toFixed(2))
   }
   else if(operator === 'subtract'){
    setInput((parseFloat(prevNum) - parseFloat(input)).toFixed(2))
   }
   else if(operator === 'divide'){
    setInput((parseFloat(prevNum) / parseFloat(input)).toFixed(2))
   }
   else if(operator === 'multiply'){
    setInput((parseFloat(prevNum) * parseFloat(input)).toFixed(2))
   }
 }
 
 
  return (
    <div className="app">
    <div className="container">
     
     <div className="row">
       <Input input={input}/>
     </div>
      <div className="row">
      <Button handleClick={addToInput}>7</Button>
      <Button handleClick={addToInput}>8</Button>
      <Button handleClick={addToInput}>9</Button>
      <Button handleClick={divide}>/</Button>
      </div>
      <div className="row">
      <Button handleClick={addToInput}>4</Button>
      <Button handleClick={addToInput}>5</Button>
      <Button handleClick={addToInput}>6</Button>
      <Button handleClick={multiply}>*</Button>
      </div>
     
      <div className="row">
      <Button handleClick={addToInput}>1</Button>
      <Button handleClick={addToInput}>2</Button>
      <Button handleClick={addToInput}>3</Button>
      <Button handleClick={add}>+</Button>
      </div>

      <div className="row">
      <Button handleClick={addDecimalToInput}>.</Button>
      <Button handleClick={addZeroToInput}>0</Button>
      <Button handleClick={evaluate}>=</Button>
      <Button handleClick={subtract}>-</Button>
      </div>
     
     <div className="row">
      <ClearButton handleClick={clearInput}/>
     </div>
     
    </div>

    </div>
  );
}

export default App;
