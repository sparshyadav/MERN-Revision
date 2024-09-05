import React, { useState } from 'react'

const Three_UserInput = () => {
    const [username, setUserName] = useState("");
    const [password, setPassowrd] = useState("");
    return (
        <div>
            <label htmlFor="">Username</label>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            <br></br>
            <label htmlFor="">Password</label>
            <input type="text" value={password} onChange={(e) => setPassowrd(e.target.value)} />

            <div className="div">
                <h1>UserInput</h1>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    )
}

export default Three_UserInput
