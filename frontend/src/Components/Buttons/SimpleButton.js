import "./SimpleButton.css";

import React from 'react'

function SimpleButton({ buttonName }) {
  return (
    <div class="frame">
      <button class="custom-btn btn-3">
        <span>{buttonName}</span>
      </button>
    </div>
  )
}

export default SimpleButton;