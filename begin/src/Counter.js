import React, {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);
  const Increase = () =>{
      setNumber(number+1);
  }
  const Decrease = () =>{
    if(number < 0){
        alert('Error');
    }
    else{
      setNumber(number-1);
    }
  }
   return (
      <div style={{
          textAlign:'center',
      }}>
       <h1 style={{
        textAlign:'center',
        fontSize: '2rem',
        color : 'lightgray',

       }}>숫자 카운트</h1>
       <h2>{number}</h2>
       <button onClick={Increase}>+1</button>
       <button onClick={Decrease}>-1</button>
       </div>
   )
}

export default Counter;