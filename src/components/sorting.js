import React, { useState } from 'react'

const data=[
    {
        name:'ravi',
        age:22,
        id:1
    },
    {
        name:'zenky',
        age:18,
        id:2
    },
    {
        name:'ramu',
        age:26,
        id:3
    }
]
const filteredData=data.sort((a,b)=>b.age-a.age)

const Sorting = () => {
 const [filter,setFiltered]=useState(false)
 const data=[
    {
        name:'ravi',
        age:22,
        id:'1'
    },
    {
        name:'venky',
        age:18,
        id:'2'
    },
    {
        name:'ramu',
        age:26,
        id:'3'
    }
]

    const changeToAsc=()=>{
        setFiltered(true)
    }

    const changeToDsc=()=>{
setFiltered(false)
    }

  return (
    <div>
        <ul>
            {
                data.map((person)=>(
                    <li key={person.id} style={{listStyleType:'none'}}>
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                    </li>
                ))
            }
        </ul>
        <button  onClick={changeToAsc}>Ascending</button>
        <button onClick={changeToDsc}>Descending</button>
        <ul>
            {
               filter&& filteredData.map((person)=>(
                    <li key={person.id} style={{listStyleType:'none'}}>
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Sorting