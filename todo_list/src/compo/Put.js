import React, {useState} from 'react';
import './Put.css';


const Form = ({value, onCreate, onKeyPress}) => {
    const onChange = (e) => {
        console.log(e.target.value);
    }
    const [Todo, setTodo] =useState({})
    return (
    <main className="App_head">
        <h1 style={{textAlign:'center', color:'aqua'}}>To Do List</h1>
    <div className="input_todo">
    <input type='text' className = "put" value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="할일을 입력하세요."/>
    <button style={{border:'none',backgroundColor:'gray', color:'white'}} className="plus" onClick={onCreate}>
      추가
    </button>
    </div>
    </main>
  );
     }

    export default Form;
    //       onChange = (e) => {
  //      console.log(e.target.value);