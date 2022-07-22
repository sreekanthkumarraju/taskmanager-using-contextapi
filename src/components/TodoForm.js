import React,{useState,useContext} from 'react';
import {Form} from 'reactstrap';
import {v4} from 'uuid';
import styled from 'styled-components'
import TodoContext from '../Context/TodoContext';


function TodoForm(){
    const [title,setTitle]=useState('')

    const [todos,setTodo,removeTodo] =useContext(TodoContext)

    const handleChange=(event)=>{
        setTitle(event.target.value)
    }  

   
   

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        const todo={
            title,
            id:v4()
        }
        console.log(...todos)
        setTodo([...todos,todo])
        console.log(todos)
    }

    const removeTasks=()=>{
        setTodo([])
    }

    return(
    <div>
        <Container>
        
         <Form onSubmit={handleSubmit}>
            
                   <input  
                     type='text' 
                     name='todo'
                     onChange={handleChange}
                   />
                 

                 <button type='submit' id='add'>Add Task</button>
             
         </Form> 

             <button type='button' id='remove' onClick={removeTasks}>Remove Tasks</button>
        

          
         </Container>
    </div>
    )
}

export default TodoForm;

const Container=styled.div`
  
form{
    margin:100px 500px 0;
}

input{
    width:300px;
    height:30px;
}

input :focus{
    border-color:red;
}

button{
    width:150px;
    height:30px;
    border-radius:30px;
}
#add{
    margin:10px 80px;
}
#remove{
    margin:10px 580px;
}

  
`