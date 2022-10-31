
import React from 'react'
import { useState } from 'react'
import uuid from 'react-uuid'



 const Filter = () => {
   
    const arrayData= [
        {
          name: 'James',
          age: 31,
        },
        {
          name: 'John',
          age: 45,
        },
        {
          name: 'Paul',
          age: 65,
        },
        {
          name: 'Ringo',
          age: 49,
        },
        {
          name: 'George',
          age: 34,
        }
      ];
    
    const filteredArray=arrayData.filter(name=>name.age>36)
    

    const result= filteredArray.map(eachName=><li style={{listStyle:'none'}} key={uuid()}>
        
        <p>{eachName.name}</p>
        <p>{eachName.age}</p>
        
      </li>)
  
return (
    <div>
    {result}
        <div>
            <input type='search'/>
           
        </div>
    </div>

    )
}

export default Filter
