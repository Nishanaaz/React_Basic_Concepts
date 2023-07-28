import React,{useState} from 'react'

const State = () => {
    //normal variable case 
    /*let count=0
    const increment=()=>{
        count++;
        console.log(count); 
    };
    */
    //using state variables 
const [count,setCount ]=useState(0);
const increment=()=>
   {
    setCount(count+1);
    }


const decrement=()=>
    {
    setCount(count-1);
    }


const [count1,setCount1]=useState(1);
const multiply=()=>{
    setCount1(count1*count);
}

const [count2,setCount2]=useState(1);
const division=()=>{
    setCount2(count2/count);
}

  return (
    <>
    <button onClick={increment}> Increment Counter</button>
    <div>counter value is:{count}</div>


    <button onClick={decrement}>Decrement Counter</button>
    <div>counter value is:{count}</div>

    <button onClick={multiply}>multiply Counter</button>
    <div>Counter value is:{count1}</div>


    <button onClick={division}>Division Counter</button>
    <div>Counter value is:{count2}</div>
    </>
  )
}

export default State;