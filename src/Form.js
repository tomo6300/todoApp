import React, { Component } from 'react';
import './css/form.css';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="タイトル ※必須" /><br/>
          <textarea name="detail" placeholder="説明を入力"></textarea><br/>
        
         <label>重要</label>
        　<input　name="importance" type="checkbox"  /> <br/>
    
          <button type="submit">todoを作成</button>
        </form>
      </div>
    );
  }
}

export default Form