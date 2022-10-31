import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import classes from './AutoCompleteSearchBar.module.css'

const data=[{
    city: "Mumbai",
},{
    city: "Mangalore",
},{
    city: "Bangalore",
},{
    city: "Chennai",
},{
    city: "Ajmer",
},{
    city: "Akola",
},{
    city: "Ahmedabad",
},{
    city: "Aurangabad",
},{
    city: "Patna",
},{
    city: "Delhi",
},{
    city: "Ghaziabad",
},{
    city: "Diu",
},{
    city: "Pondicherry",
},{
    city: "Pune",
},{
    city: "Surat",
}]

//https://jsonplaceholder.typicode.com/users
const AutoCompleteSearchBar = () => {

const [city,setCityData]=useState([])
const [text,setSearchingText]=useState('')
const [suggestions,setSuggestionData]=useState([])
useEffect(()=>{
setCityData(data)

},[])


const onChangeHandler=(event)=>{
    let matches=[]
    let searchingValue=event.target.value
    if(searchingValue.length>0){
        matches=data.filter(eachCity=>eachCity.city.toLowerCase().includes(searchingValue.toLowerCase()))
        console.log(matches)
    }
    setSuggestionData(matches)
setSearchingText(event.target.value)
}

const onSuggestHandler=(city)=>{
    console.log(city)
    setSearchingText(city)
    setSuggestionData([])
}

  return (
    <div className={classes.auto}>
        <input type='text' className={classes.input} onChange={onChangeHandler} value={text}/>
        {suggestions.map((eachSuggestion,i)=>(
        <div key={i} className={classes.suggestions} onClick={()=>onSuggestHandler(eachSuggestion.city)}>{eachSuggestion.city}</div>
        ))}
    </div>
  )
}

export default AutoCompleteSearchBar