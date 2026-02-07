import { useState } from "react"

export const AddMovie = ({ onAddMovie }) => {
  const [text, setText] = useState("")

  const handleAdd = () => {
    if (text.trim()) {
      onAddMovie(text) 
      setText("")
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}