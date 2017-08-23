import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todo:[
        {id:1, name: 'Build An App', iscomplete: true},
        {id:2, name: 'Launch The App', iscomplete: false},
        {id:3, name: ' Get More Jobs', iscomplete: false},
        {id:4, name: 'MAKE MONEY!!, to pay bills lol', iscomplete: false}        
      ],

      cuttentTodo: ''
    }

    // this.handle_input_change = this.handle_input_change.bind(this);

  }
  

  
  // when you define a funtion must bind it to this 
  // handle_input_change(evt) {
  //   this.setState({cuttentTodo: evt.target.value}) 
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Shalom Todo</h2>
        </div>

        <div className="Todo-App">
          {/* <form action="">
            <input type="text" onChange={this.handle_input_change} value={this.state.cuttentTodo}/>
            <input type="text" 
              onChange={event => this.setState({cuttentTodo: event.target.value})} 
              value={this.state.cuttentTodo}/>
          </form> */}
          {/* <TodoForm currentTodo = {this.state.cuttentTodo} handle_input_change = {this.handle_input_change}/> */}
          <TodoForm currentTodo = {this.state.cuttentTodo} 
            input_change = { event => this.setState({cuttentTodo: event.target.value})}/>

          <div className="Todo-List">
            {/* <ul>
              {this.state.todo.map(todo => 
                <li key={todo.id} > 
                  <input type="checkbox" name="done" defaultChecked={todo.iscomplete}/>
                    {todo.name}
                </li>)
                }
                
            </ul> */}
            {/* <TodoList list = {this.state.todo.map(todo => 
                <li key={todo.id} > 
                  <input type="checkbox" name="done" defaultChecked={todo.iscomplete}/>
                    {todo.name}
                </li>) */}

                <TodoList list_of_todos = {this.state.todo}/>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
