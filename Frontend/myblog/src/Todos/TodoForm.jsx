import React, { useState } from "react";  

const TodoForm = ({ addTodo }) => {  
    const [input, setInput] = useState("");  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (!input) return;  
        addTodo(input);  
        setInput("");  
    };  

    return (  
        <form onSubmit={handleSubmit} className="mb-4">  
            <input   
                type="text"   
                value={input}   
                onChange={(e) => setInput(e.target.value)}   
                placeholder="Add a new todo"   
                className="border border-gray-300 rounded p-2 mr-2 text-black"  
            />  
            <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">  
                Add Todo  
            </button>  
        </form>  
    );  
};  

export default TodoForm;