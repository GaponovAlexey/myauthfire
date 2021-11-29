import React, { useState } from 'react'

export const Form = ({ title, HandleButton }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='passwor'
      />
      <button onClick={() => HandleButton(email, password)}>{title}</button>
    </div>
  )
}
