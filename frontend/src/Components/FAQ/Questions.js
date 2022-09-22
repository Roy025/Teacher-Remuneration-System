import React from 'react'
import "./Questions.css"
import { useState } from "react"

function Questions() {

  const[click, setClick] = useState("false");

  function changeView(){
    setClick(!click)
  }

  return (
    <div className='Faq-container' onClick={changeView}>
      <div className="Question" onClick={changeView}>
        <h5 >How to create an account?</h5>
        <i class="fa-sharp fa-solid fa-caret-down"></i>
      </div>
      <div className= {`Answer ${click ? "Clicked" : ""}`} onClick={changeView}>
        <p>Like my father did.</p>
      </div>
    </div>
  )
}

export default Questions
