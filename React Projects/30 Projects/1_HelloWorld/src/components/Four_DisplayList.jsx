import React from 'react'

const Four_DisplayList = () => {
    const items=["item1", "item2", "item3", "item4", "item5"];
  return (
    <div>
      <ul>
        {items.map((item)=>(
            <h1>{item}</h1>
        ))}
      </ul>
    </div>
  )
}

export default Four_DisplayList
