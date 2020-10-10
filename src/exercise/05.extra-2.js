// Styling
// 💯 accept a size prop to encapsulate styling (exercise)
// http://localhost:3000/isolated/exercise/05.extra-2.js

import React from 'react'
import '../box-styles.css'

function Box({size, className, style, ...props} = {}) {
  return (
    <div
      className={`box ${size ? `box--${size}` : ''} ${className}`} // 💬 may create `sizeClassName` variable
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
