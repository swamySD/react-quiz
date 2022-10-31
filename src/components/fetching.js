import React,{useState} from 'react';
import axios from 'axios';
import classes from './fetching.module.css';
const Fetching = () => {

    const [apiData, setApiData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
 


  const inputHandler = (e) => {
    setSearchInput(e.target.value)
  };

  const submitHandler = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const result=  response.data.filter((each) =>
      each.username.toLowerCase()===(searchInput.toLowerCase())
    );
      setApiData(result)
      console.log(result);
    });
    
  };
  return (
    <div className={classes.container}>
      <div>
        <input
          className={classes.input}
          placeholder="Search..."
          type="text"
          onChange={inputHandler}
          value={searchInput}
        />
        <button className="btn btn-primary" onClick={submitHandler}>
          Submit
        </button>
        
      </div>
       {apiData.map(user=>(
        <div key={user.id}>
         
          <p>userName:{user.name}</p>
          <p>{user.username}</p>
          <p>{user.city}</p>
          <p>{user.email}</p>
        </div>
       ))}
      </div>
  )
}

export default Fetching


