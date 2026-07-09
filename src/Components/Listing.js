import React from 'react'


const Listing = (props)=>{
    

    return(
        <div>
        <h1>List of Array</h1>
        {props.list.map((list, idx)=>{
           return(
             <div key={idx} style={{display: "flex", justifyContent: "space-around"}}>
              <p> {list.studentName}</p>
              <p> {list.studentAge}</p>
              </div>
           )
        })}
      </div>
    )
}


export default Listing