import React from 'react'

function Button({children, handleClick}) {
    const isOperator = val => {
        return !isNaN(val)  || val === "." || val === "="
      }
    return (
        <div className={`button ${isOperator(children) ? "" : "operator"}  `} 
              onClick={() => handleClick(children)}>
            {children}
        </div>
    )
}

export default Button
