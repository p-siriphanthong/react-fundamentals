// Dynamic Forms
// 💯 Validate lower-case (exercise)
// http://localhost:3000/isolated/exercise/06.extra-2.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      {/* 💬 using Boolean(error) */}
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
