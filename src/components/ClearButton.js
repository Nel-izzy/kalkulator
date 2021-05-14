import React from 'react'

function ClearButton({handleClick}) {
    return (
        <div className="clear" onClick={handleClick}>
            Clear
        </div>
    )
}

export default ClearButton
