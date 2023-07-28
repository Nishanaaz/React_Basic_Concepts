import "./App.css";
import Welcome from "./component/Welcome";


function App() {


  {/*const name="Priyanshu",
roll ="6";*/}
const styles={textAlign:"center",color:"pink"}

  return <>

  <h1 className="heading">Hello! react Js</h1>
  <h1 style={{textAlign:"center",color:"red"}}>Hello! react Js</h1>
  <h3 style={styles}>I love my  india</h3>
  <Welcome><h1>Hello React Js</h1></Welcome>
  
   
  
 
  <Welcome roll="1"/> 
  <Welcome name="Alisha" roll="2"/>
  <Welcome name="Muskan" roll="3"/>



{/* // how to use children props:-
<Welcome title="Parent Component">
<p>Hello I am name="Nisha"</p>
</Welcome>
  
<Welcome><span>click me!</span></Welcome>
*/}  


</>
}
export default App;