import React from 'react'

const EventHandling= () => {
    const clicked=(event,name)=>{
        console.log(event.target,name);
        alert("Hello! I am clicked Function: ");
    }

    const inputBox=(e)=>{
        console.log(e.target.value);
    };
  return (
    <div 
        style={{
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"1px solid red"
}}
>
    <input type='text' name="" id="" onChange={inputBox}/>
    <button onClick={(e)=>clicked(e,"Priyanshu")}>I am a button</button>
    </div>
  ); 
}

export default EventHandling;