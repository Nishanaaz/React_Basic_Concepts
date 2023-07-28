import React from 'react'
import Child from './child'

const parent = () => {
    const data=[
    {
        id:1,
        name:"Nisha",
        address:"chatterpur",
        qualification:"bca"
    },

    {
        id:2,
        name:"Muskan",
        address:"chatterpur",
        qualification:"BA"
    },

    {
        id:3,
        name:"Alisha",
        address:"chatterpur",
        qualification:6
    },


    {
        id:4,
        name:"Alshifa",
        address:"chatterpur",
        qualification:9
    },


    {
        id:5,
        name:"RJ",
        address:"chatterpur",
        qualification:"B.sc"
    }
]
  return (
    <div style={{display:"flex", gap:  "2rem",flexWrap:"wrap"}}>
    <Child 
        name={data[0].name} 
        address={data[0].address}
        qualification =  {data[0].qualification} 
    />
    <Child 
    name={data[1].name} 
    address={data[1].address}
    qualification =  {data[1].qualification} 
/>


{
    data.map((object)=>{
       return (<Child 
        key={object.id}
        name={object.name} 
        address={object.address}
        qualification =  {object.qualification} 
    />)
    })
}


{
    // data.map(({name,address,qualification})=>{
    //    return (<Child 
    //     name={name} 
    //     address={address}
    //     qualification =  {qualification} 
    // />)
    // })
}

{
    // data.map((object)=>{
    // const props={...object};
    //    return <Child{...props}/>;
    // })
} 

{
    data.map((props)=>{
       
       return  <Child key={props.id} {...props}/>;
    })
} 
    </div>
  )
}

export default parent;