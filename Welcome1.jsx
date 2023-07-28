import React from 'react'
// import "../App.css";
import styles from  "./Welcome.module.css"

const Welcome = (props) => {
  // const {name,roll,children}=Welcome
  return (
    <>
    <h1 className={styles.heading} >Hello my name is {props.name}.</h1>
    <h2> My Roll number is {props.roll}</h2>
    {props.children}
    </>
  )
}

Welcome.defaultProps={
  name:'Anzum',
roll:7
}

export default Welcome