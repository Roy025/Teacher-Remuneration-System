import React from 'react'
import "./Questions.css"
import { useState } from "react"

function Questions() {

  const[click, setClick] = useState("false");

  function changeView(){
    setClick(!click)
  }

  return (
    <div className='Faq-container'>
      <div className="Question">
        <h5 >How to create an account?</h5>
        <i class="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      <div className= {click ? "Answer Clicked" : "Answer"} onClick={changeView}>
        <p>Like my father did.</p>
      </div>
    </div>
  )
}

export default Questions
