import React, { useState } from 'react'

export default function Bouton() {
    const [count, setCount] = useState(0);
    function andleClick(){
        setCount(count + 1);
    }

  return (
    <div>
      <button onClick={andleClick}>
        Click moi {count}
      </button>
    </div>
  )
}
