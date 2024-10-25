
import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './pages/layout';
import Footer from './pages/Footer';
import Ome from './pages/other';
import Boody from './pages/boody';
import Header from './pages/Header';
import Counter from './pages/Counter';
import UserForm from './pages/UserForm';
import UserInfo from './pages/UserInfo';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import Cal from './pages/Cal';
import BlogApp from './blog/BlogApp';
function App() {
  const[count, setCount] = useState(0)
const [user,setUser] = useState({name:'john',age:25});
const [todos,setTodos] = useState([
  { text: 'Learn React', id: 1 },  
  { text: 'Build a Todo App', id: 2 },  
  { text: 'Master Hooks', id: 3 }  

]);

useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if(storedTodos){
    setTodos(storedTodos);
  }
}, [])

useEffect(() =>{
  localStorage.setItem('todos',JSON.stringify(todos));
},[todos]);
// add new todo
const addTodo = (text)=>{
  
  const newTodo = {id:Date.now(),text,isCompleted:false};
  setTodos([...todos,newTodo])

};
// check togle


const toggletodo = (id) =>{
  const updatedTodos = todos.map((todo)=>
    todo.id === id ? {...todo,isCompleted:!todo.isCompleted}:todo
  );
  setTodos(updatedTodos)
};

// remove function

const removeTodo = (id) =>{
  const filterTodos = todos.filter((todo)=>todo.id !== id);
  setTodos(filterTodos);
}



const handleUpdateUser = (newUser) => {
  setUser(newUser);
};
  return (

    <div>
      
      <h1>Todo List</h1>
      <BlogApp/>
      </div>
      )
 
    }
    /* // <BrowserRouter>
    // <Routes>
      
    //   <Route path="/" element={<Layout/>}>
    //   <Route index element={<Home/>}/>
    //   <Route path='register' element={<Register/>} />
    //   <Route path='login' element={<Login/>}/>
    //   <Route path='ome' element={<Ome/>}/>
     
      
    //   </Route>
    // </Routes>
    // <h1>hello</h1>

    // </BrowserRouter> */
    
  
    
    ///////////new
    // <div className='bg-slate-800 text-white flex items-center justify-center mx-56 mt-36 p-36 flex-col'>  
    {/* <div className="text-center">  
        <h1 className="mb-4">hello world of Eth</h1>  
        <Header title="My React App" subtitle="understanding Components"/>  
        <Counter />  
  <h1 className='text-white text-2xl'>User Profile</h1> 
   <UserInfo name={user.name} age={user.age}/>
  <UserForm name={user.name} age={user.age} onUpdate={handleUpdateUser}/>
 
    </div>   */}

{/* <h1 className='text-3xl font-bold mb-4 text-center'>Todo List</h1>
<TodoForm addTodo={addTodo}/>
<TodoList todos={todos} toggleTodo={toggletodo} removeTodo={removeTodo}/>
</div> */}
   
  

export default App
