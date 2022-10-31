import { json } from 'express'
import React,{useState} from 'react'
import classes from './Searchbartwo.module.css'
const Searchbartwo = () => {
const [input,setInput]=useState('')
const [data,setData]=useState('')

const onChangeInput=(e)=>{
    setInput(e.target.value)
}

const searchDetails=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    } 

return (
    <div className={classes.search}>
        <div className={classes.innercontainer}>
        <input type='search'
         placeholder='enter' 
         className={classes.input}
         onChange={onChangeInput}/>
        <button className={classes.button} onClick={searchDetails}>Enter</button>
        </div>
    </div>
  )
}

export default Searchbartwo