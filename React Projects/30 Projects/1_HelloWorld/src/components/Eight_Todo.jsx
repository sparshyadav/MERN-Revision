import React, { useState } from 'react'

const Eight_Todo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    return (
        <div>
            <input type="text" value={input} onChange={(e) => (setInput(e.target.value))} />
            <button onClick={() => setList([...list, input])}>Add</button>
            <ul>
                {
                    list.map((item, idx) => (
                        <h1 key={idx}>{item}</h1>
                    ))
                }
            </ul>
        </div>
    )
}

export default Eight_Todo
