// rfce -- gyors letrehozas
import React, { useState } from 'react'

function ButtonStateChange() {
  const [buttonText, setButtonText] = useState("click here")

  return (

    <button onClick={() => {
      if (buttonText === "click here"){
        setButtonText("clicked")
      } else {
        setButtonText("stop clicking")
      }
      }}
    >
      {buttonText}
    </button>
  )
}

export default ButtonStateChange