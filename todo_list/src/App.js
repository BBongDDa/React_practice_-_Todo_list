import React, {useState} from 'react';
import './App.css';
import Form from './compo/Put'
import TodoTemplate from './compo/box';
import UserList from './compo/TodoList';



function App() {


  const [Users, setUsers] = useState({
    Todo: [],
  });

  const {Todo} = Users;

  const Delete = id => {
    console.log(Users);
      setUsers({
        ...Todo,
        Todo: Todo.filter(item =>  item.id !== id)
      
  });
}
  console.log(Users);

  const onCreate = (data,id) => {
    setUsers({
      
      Todo: Todo.concat({user: data, id: id})
    })
    
  }
  const onCreate2 = (data,id) => {
    setUsers({
      
      Todo: Todo.concat({user: data, id: id})
      
    })
    Delete(id+1);
  }
  console.log(Users.Todo);
  return (
    <header className="App-header">
    <TodoTemplate>
    <Form isCreate={onCreate} />
    <UserList todo={Todo} Delete={Delete} onCreate={onCreate} onCreate2={onCreate2}/>
    </TodoTemplate>
    </header>
  );
}


export default App;