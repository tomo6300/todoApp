import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

  render() {
    const className = this.props.done ? 'done' : 'undone';
    const link = this.props.done ? '元に戻す' : '完了！'
    const todoDelete = this.props.done? '削除' : '';
    const importance = this.props.importance? '【重要】':'';  
    return(
      <div className={className}>
        <span>{this.props.countTodo}</span><span class="imp">{importance}</span>
        <span>：{this.props.title}　　</span>
        <a href="" onClick={(e) => { e.preventDefault();this.props.setComplete(this.props)}}>{link}</a>　
        <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodo(this.props)}}>{todoDelete}</a><br/>
        <p>{this.props.detail}</p>
      </div>
    );
  }
  
}

export default Todo