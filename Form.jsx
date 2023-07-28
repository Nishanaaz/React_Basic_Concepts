import React,{useState} from 'react';



const Forms=()=>{
    const [email,setEmail]=useState("bj   ")
    const [password,setPassword]=useState("")


    const handleSubmit=(e)=>{
        e.preventDefault(); 
        console.log(email,password);
        setEmail("");
        setPassword("");
    }; 
  return (
    <>
      <form onSubmit={handleSubmit}
      style={{ 
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
      }}>
      <label htmlFor="email">Email:</label>
      <input type="email" value={email}   id="email" onChange={(e)=>setEmail(e.target.value)}/> 
      <label htmlFor="password">Password:</label>
      <input type="password" value={password} id="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">Submit</button> 

      </form>   
    </>
  )

}
export default Forms;