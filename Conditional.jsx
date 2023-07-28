import React from 'react'

const Conditional = ({type}) => {

  return (
    <>
    {
    // type=="Odd"?<h1>I am Odd</h1>:<h1>I am Even</h1>
    }


    {
      type=="Even"?<h1>I am even</h1>:<h1>I am odd</h1>
    }


    {
        // type=="Even"?<h1>I am even</h1>:<h1>I am Odd</h1>
    }
   
    { 
      type ==="Both" && <h1> Hi! If you want to print single true statement</h1>
    }

    
    </>
  );
};

export default Conditional;