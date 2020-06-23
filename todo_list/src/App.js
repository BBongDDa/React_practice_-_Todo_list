import React from 'react';
import './App.css';
import Form from './compo/Put'
import TodoTemplate from './compo/box';
import TodoList from './compo/TodoList';

function App() {
  return (
    <header className="App-header">
    <TodoTemplate>
    <Form/>
    <br/>
    <TodoList/>
    </TodoTemplate>
    </header>
  );
}

export default App;