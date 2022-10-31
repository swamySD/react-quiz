import React,{useState,useEffect} from 'react'


function Effect() {
  const [count,setCount]=useState(0)
  
  useEffect(()=>{
    console.log(count)
  },[count])

  const onIncrease=()=>{
    setCount(count+1)
    
  }
  return (
    <div className="App">
      <p>you clicked {count} time</p>
      <button onClick={onIncrease}>Click me</button>
    </div>
  );
}

export default Effect;