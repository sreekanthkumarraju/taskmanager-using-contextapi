import React,{useState} from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos';
import TodoContext from './Context/TodoContext';

function App() {
  const [todos,setTodo]=useState([])

  const removeTodo=(id)=>{
    console.log(id)
     setTodo(todos.filter(todo=>todo.id!==id))
  }

  return (
    <TodoContext.Provider value={[todos,setTodo,removeTodo]}>
       <TodoForm/> 
       <Todos/>
   </TodoContext.Provider>
  );
}

export default App;

