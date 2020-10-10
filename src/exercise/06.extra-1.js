// Basic Forms
// 💯 using refs (exercise)
// http://localhost:3000/isolated/exercise/06.extra-1.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputRef} id="usernameInput" type="text" />
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
