import React from 'react'
import "./Questions.css"
import { useState } from "react"

function Questions({
  question,
  answer
}) {

  const[click, setClick] = useState("false");

  function changeView(){
    setClick(!click)
  }

  return (
    <div className='Faq-container' onClick={changeView}>
      <div className="Question" onClick={changeView}>
        <h5 onClick={changeView}>{question}</h5>
        <i class="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      <div className= {`${click ? "Answer" : "Answer Clicked"}`} onClick={changeView}>
        <p onClick={changeView}>{answer}</p>
      </div>
    </div>
  )
}

export default Questions
