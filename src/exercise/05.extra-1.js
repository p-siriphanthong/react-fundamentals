// Styling
// 💯 Create a custom component (exercise)
// http://localhost:3000/isolated/exercise/05.extra-1.js

import React from 'react'
import '../box-styles.css'

function Box({className, style, ...props} = {}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
