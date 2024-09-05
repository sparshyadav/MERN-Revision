import React, { useState } from 'react'

const Five_Toggle = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <label htmlFor="">Toggle Switch</label>
      <input type="checkbox" onClick={() => setValue(!value)} />
      <p>Toggle Switch {value ? "ON" : "OFF"}</p>
    </div>
  )
}

export default Five_Toggle
