import React from 'react'
import "./index.css"
import {useState} from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

 const App = () => {
const [step, setStep] = useState(1);
const [isOpen,setIsOpen]=useState(true)

const handlePrevious = () => {
  if (step === 1) {
    return; // Prevent step from going below 1
  } else {
    setStep(step - 1); 
  }
}

const handleNext = () => {
  if (step === 3) {
    return; // Prevent step from going above 3
  } else {
    setStep(step + 1); 
  }
}
// This function toggles the state 'isOpen' between true and false when the button is clicked.
const handleClick = () => setIsOpen(!isOpen);

return (
  
 
    <>
    <button className='close' onClick={handleClick}>&times;</button>
{/* This conditional rendering checks if 'isOpen' is true, and if so, renders the enclosed JSX. */}
{isOpen && (
    
    <div className="steps">
    <div className="numbers">
      <div className={step >=1 && "active"}>1</div>
      <div className={step >=2 && "active"}>2</div>
      <div className={step >=3 && "active"}>3</div>
    </div>
    <p className="message">step {step}: {messages[step-1]}</p>
    <div className="buttons">
      <button className="previous"style={{backgroundColor:"#747bff", color:"#fff"}} onClick={handlePrevious}>Previous</button> 
      <button className="next" style={{backgroundColor:"#747bff", color:"#fff"}} onClick={handleNext}>Next</button> 
    </div>
    </div> 
  )}

    </>


)}

  


export default App