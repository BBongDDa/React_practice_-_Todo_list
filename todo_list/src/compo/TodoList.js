import React from 'react';
import styled from 'styled-components';
import List from './list';


const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray;
`;

function TodoList({todo, Delete, onCreate, onCreate2}) {
  console.log(todo);
  const plan = todo.map((todolist) => {
    
    return ( 
    
    
    <List planName={todolist.user}  key={todolist.id} id={todolist.id} Delete={Delete} onCreate={onCreate} onCreate2={onCreate2}/>
      )
    })
    console.log(plan);

  return (
    <TodoListBlock>
    <div style={{fontSize:'1.4rem', backgroundColor:'lightgray'}}>
      {plan}
      <hr style={{border:'solid 2px gray', width: '100%;'}}></hr>
    </div>
  </TodoListBlock>
  );
}


export default TodoList;