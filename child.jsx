import React from 'react'

const child = ({name,address,qualification}) => {
  return (
    <div style={{width:"17rem",height:"12rem",border:"2px solid red"}}>
    <h1>name: {name}</h1>
    <h2>Address: {address}</h2>
    <h3>Qualification: {qualification}</h3>
    </div>
  )
}

export default child;