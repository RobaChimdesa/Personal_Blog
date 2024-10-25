import React from "react";  

const TodoList = ({ todos, toggleTodo, removeTodo }) => {  
    return (  
        <ul className="list-none">  
            {todos.map((todo) => (  
                <li   
                    key={todo.id}   
                    className={`space-x-36 flex justify-between items-center p-2  ${  
                        todo.isCompleted ? 'line-through text-gray-500' : ''  
                    }`}  
                >  
                    <span className="flex-1">{todo.text}</span>  
                    <div>  
                        <button   
                            onClick={() => toggleTodo(todo.id)}   
                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"  
                        >  
                            {todo.isCompleted ? 'Undo' : 'Complete'}  
                        </button>  
                        <button   
                            onClick={() => removeTodo(todo.id)}   
                            className="bg-red-500 text-white px-3 py-1 rounded"  
                        >  
                            Remove  
                        </button>  
                    </div>  
                </li>  
            ))}  
        </ul>  
    );  
};  

export default TodoList;