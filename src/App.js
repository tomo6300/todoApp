import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import TodoList from './TodoList';
import './css/App.css'



class App extends React.Component {

  constructor() {
    super();
    const todos =  JSON.parse(localStorage.getItem("todos"));
    const countTodo =  JSON.parse(localStorage.getItem("countTodo")); 
      console.log(countTodo);
    this.state = {
      todos: todos,
      countTodo: countTodo,
      filterMode: 0  
    }
    
  }
    
  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) {
      alert("タイトルを入力してください");
      return;
    }
    const detail = e.target.detail.value;
    const todos = this.state.todos.slice();  
      
    if (todos.filter(todo => todo.title === title).length > 0) {
      alert("同じタイトルのtodoがあります");
      return;
    }
      
    const importance = e.target.importance.checked;
    console.log(importance);

    todos.push({
      title: title,
      detail: detail,
      done: false,
      importance: importance,    
      countTodo: this.state.countTodo
    });
    const countTodo = this.state.countTodo + 1 ;
      
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("countTodo", JSON.stringify(countTodo));  
    console.log(localStorage);  
      
   
    this.setState({ todos });
    this.setState({ countTodo })

    e.target.title.value = '';
    e.target.detail.value = ''
  }

  setComplete(clickTodo) {
    const todos =  JSON.parse(localStorage.getItem("todos"));
      
      
    const TypeArrayTodos = [].map.call(todos, (element) => {
        return element;
    });
     
    const filterMode = this.state.filterMode;
    let line; 
    switch(filterMode){
          case 1:
            line = TypeArrayTodos.filter(todo => todo.done === true);
            break;
          case 2:
            line = TypeArrayTodos.filter(todo => todo.done === false);
            break;
          case 3:
            line = TypeArrayTodos.filter(todo => todo.importance === true && todo.done === false);
            break;
          default:
            line = todos;
            break;
      }  
      

      console.log(line);
      

    const todo = line[clickTodo.index];
    console.log(todo);    
    todo.done = !todo.done;
    todos[clickTodo] = todo;
      
      console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
      console.log(localStorage);
      
      
      
    const convertedTypeArrayTodos = [].map.call(todos, (element) => {
        return element;
    });
     
    console.log(convertedTypeArrayTodos);
     
    const lineb = convertedTypeArrayTodos.filter(todo => todo.done === todo.done);
    
      //console.log(line);
    
    this.setState({ todos:lineb });
  }

  deleteTodo(clickTodo) {
    const todos =  JSON.parse(localStorage.getItem("todos"));
      
      
    const TypeArrayTodos = [].map.call(todos, (element) => {
        return element;
    });
     
    const filterMode = this.state.filterMode;
      
    console.log(filterMode);  
      
    if (filterMode === 1 || filterMode === 2 || filterMode === 3){
        alert("削除はすべてのtodoが表示されている時のみ行えます");
        return;
    }  
        
    console.log(todos[clickTodo.index]);  
    todos.splice(clickTodo.index,1);  
       console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
      console.log(localStorage);
    this.setState({ todos });
  }
    
  //絞り込み
  handleFilterVal(clickTodo) {
    
    const todos = JSON.parse(localStorage.getItem("todos"));

    const convertedTypeArrayTodos = [].map.call(todos, (element) => {
        return element;
    });
      
    console.log(convertedTypeArrayTodos);
    
    const line = convertedTypeArrayTodos.filter(todo => todo.done === true);
      
    const filterMode = 1;  
    
      console.log(line);
      
      console.log(todos);
    
    // setStateを実行
    this.setState({
      todos: line,
      filterMode: filterMode    
    });
    
  }
    
　handleFilterValB(clickTodo) {
    
    const todos = JSON.parse(localStorage.getItem("todos"));

     
    const convertedTypeArrayTodos = [].map.call(todos, (element) => {
        return element;
    });
     
    console.log(convertedTypeArrayTodos);
     
    const line = convertedTypeArrayTodos.filter(todo => todo.done === false);
     
    const filterMode = 2; 
    
      console.log(line);
    
    this.setState({
      todos: line,
      filterMode: filterMode
    });
    
  }   
    
  handleFilterValC(clickTodo) {
     
    const todos = JSON.parse(localStorage.getItem("todos"));

     
    const convertedTypeArrayTodos = [].map.call(todos, (element) => {
        return element;
    });
     
    console.log(convertedTypeArrayTodos);
      
    const line = convertedTypeArrayTodos.filter(todo => todo.importance === true && todo.done === false);  
     
    const filterMode = 3; 
    
    this.setState({
      todos: line,
      filterMode: filterMode
    });
    
  }      
    

  render() {

    return (
      <div className="app">
        <h1>ToDoアプリ</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} /><br/>
        <h4>フィルタリング：　 <a href="" >全て</a>　 <a href="#1" onClick={this.handleFilterVal.bind(this)}>完了</a>　 <a href="#2"  onClick={this.handleFilterValB.bind(this)}>未完了</a>　<a href="#3"  onClick={this.handleFilterValC.bind(this)}>重要（未完了のみ）</a></h4>    
        <TodoList
          todos={this.state.todos}
          setComplete={this.setComplete.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          />
      </div>
    );
  }
}

export default App