// Rendering Lists
// 💯 Focus Demo (exercise)
// http://localhost:3000/isolated/exercise/07.extra-1.js

import React from 'react'

const allItems = [
  {id: 'a', value: 'apple'},
  {id: 'o', value: 'orange'},
  {id: 'g', value: 'grape'},
  {id: 'p', value: 'pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function updateItem(id, value) {
    setItems(items.map(item => (item.id === id ? {id, value} : item)))
  }

  function shuffleItems() {
    const newItems = [...items]
    for (let i = newItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newItems[i], newItems[j]] = [newItems[j], newItems[i]]
    }
    return newItems
  }

  React.useEffect(() => {
    const id = setInterval(() => setItems(shuffleItems()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <div>
        <h1>Without a key</h1>
        {items.map(item => (
          <input
            value={item.value}
            onChange={e => updateItem(item.id, e.target.value)}
          />
        ))}
      </div>
      <div>
        <h1>With array index as key</h1>
        {items.map((item, index) => (
          <input
            key={index}
            value={item.value}
            onChange={e => updateItem(item.id, e.target.value)}
          />
        ))}
      </div>
      <div>
        <h1>With a Proper Key</h1>
        {items.map(item => (
          <input
            key={item.id}
            value={item.value}
            onChange={e => updateItem(item.id, e.target.value)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
