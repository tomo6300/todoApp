import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {

  render() {
    
    const todos = [];
    for (var i = 0; i < this.props.todos.length; i++) {
      todos.push(
        <Todo
          key={i}
          index={i}
          countTodo={this.props.todos[i].countTodo}
          title={this.props.todos[i].title}
          detail={this.props.todos[i].detail}
          done={this.props.todos[i].done}
          importance={this.props.todos[i].importance}
          setComplete={this.props.setComplete}
          deleteTodo={this.props.deleteTodo}
        />
      );
    }

    return(
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList