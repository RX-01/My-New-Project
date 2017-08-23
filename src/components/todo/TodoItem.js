import React from 'react';



export const TodoItem = (props) =>{
 
    return(
        
        <li> 
        <input type="checkbox" name="done" defaultChecked={props.iscomplete}/>
          {props.name}
        </li>
        
       )


};
