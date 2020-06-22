import React from 'react';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  
  return (
    <div>
     <Hello name ="react" color ='red' isSpecial={true}/>
     <Hello color ='aqua' isSpecial={false}/>
    </div>
  );
}

function App2(){
  return <Counter/>
}

function App3(){
  return(
    <InputSample/>
  )
}
export default App3;
