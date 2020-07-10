import React, {useState} from 'react';
import './Put.css';

let id = 0;

const Form = ({isCreate},{onCreate2}) => {
  const [Todo, setTodo] =useState({
    Users : [],
    Input : '',
  })
  const {Input} = Todo
    
    const onChange = (e) => {
      setTodo(
        {
         ...Todo,
        Input : e.target.value
        }
      )
      
    }
  

    const onCreate= () =>{
      setTodo({
        ...Todo,
        Input: ""
      })
      isCreate(Input,id++);
    }
    
    

    
    return (
    <main className="App_head">
        <h1>To Do List</h1>
    <div className="input_todo">
    <input type='text' className = "put" value={Input} onChange={onChange} placeholder="할일을 입력하세요."/>
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