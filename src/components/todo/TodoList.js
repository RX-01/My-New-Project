import React from 'react';
import {TodoItem} from './TodoItem'

export const TodoList = (props) =>{
 
    return(
        <ul>
        {/* { props.list_of_todos.map(todo => 
        <TodoItem id = {todo.id} iscomplete = {todo.iscomplete}
        name = {todo.name}
        /> )} */}

        { props.list_of_todos.map(todo => <TodoItem key = {todo.id} {...todo}/> )}
        
        
          
      </ul>
       
        // <ul>
        //     {props.list}
        // </ul>

        
       )


};
