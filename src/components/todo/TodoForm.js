import React from 'react';
import PropTypes from 'prop-types';


export const TodoForm = (props) => (


 

        // <form action="">
        //     {/* <input type="text" onChange={this.handle_input_change} value={this.state.cuttentTodo}/> */}
        //     <input type="text" 
        //       onChange={event => this.setState({cuttentTodo: event.target.value})} 
        //       value={this.state.cuttentTodo}/>
        //   </form>

        <form action="">
        {/* <input type="text" onChange={this.handle_input_change} value={this.state.cuttentTodo}/> */}
        <input type="text" 
          onChange={props.input_change} 
          value={props.currentTodo}/>
      </form>)

      TodoForm.prototype = {
        currentTodo:PropTypes.string,
        input_change:PropTypes.func
      }








