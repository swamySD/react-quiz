import { useState ,useEffect} from "react"
const Clean=()=>{
   
   const [value,setValue]=useState(0)

useEffect(()=>{
    console.log('hi')
},[value])
const clickHandler=()=>{
   setValue(prevState=>prevState+1)
}
    return(
        <div>
            <h1>swamy </h1>
            <button onClick={clickHandler} >jj</button>
            {console.log('sewa')}
        </div>
    )
}
export default Clean