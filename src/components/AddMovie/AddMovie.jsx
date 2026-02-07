import { useState } from "react";

export const AddMovie = ({ onAddMovie }) => {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            onAddMovie(text);
            setText(""); 
        }
    }

    return (
        <div className="add-movie">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter movie name..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}