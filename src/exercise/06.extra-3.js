// Controlled Forms
// 💯 Control the input value (exercise)
// http://localhost:3000/isolated/exercise/06.extra-3.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleChange(event) {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
