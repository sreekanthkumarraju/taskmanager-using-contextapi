import React,{useContext} from 'react';
import styled from 'styled-components';
import TodoContext from '../Context/TodoContext';

export default function Todos(){
    const [todos,setTodo,removeTodo]=useContext(TodoContext)


    console.log(todos)
    return (
        <Container>
            {
                    todos.map((todo)=>{
                        return(
                           <div>
                             <span id='title'>{todo.title}</span>
                             <span id='delete' onClick={()=>removeTodo(todo.id)}><i class="fa-solid fa-delete-left" ></i></span>
                           </div>
                        )
                    })
              
            }
        </Container>
        
        
    )
}

const Container=styled.div`
   div{
       margin:10px 550px 0px;
   }

    span{
        font-size:20px;
        margin-right:10px;
    }

`;