
import React,{ useState} from 'react'
import { useHistory } from 'react-router-dom'

import classes from './login.module.css'
const Login = () => { 
  const [userName,setUserName]=useState('')
  const [userPassword,setUserPassword]=useState('')
  const [error,setError]=useState(false)
  
  const history=useHistory()

  const userHandler=(event)=>{
    let userValue=event.target.value;
    setUserName(userValue)
  }
const passwordHandler=(event)=>{
    let passwordValue=event.target.value;
    setUserPassword(passwordValue)
  }
  const onSubmitForm=(event)=>{
  event.preventDefault()
  if(userName.length>6 && userPassword.length>7){
  
  history.push('/Auto')
}
setError(true)
}
 return (
    <form onSubmit={onSubmitForm}>
    <div className={classes.login}>
      <div className={classes.loginContainer}>
        <div className={classes.fields}>
        <label htmlFor='username'>Enter user Name</label>
        <input type='text' id="username" className={classes.inputs} onChange={userHandler} value={userName}/>
        {error&&<p style={{color:'red',fontSize:'8px'}}>length should be greter than 6</p>}
        </div>
        <div className={classes.fields}>
        <label >Password</label>
        <input type='password' className={classes.inputs} onChange={passwordHandler} value={userPassword} />
        {error&&<p style={{color:'red',fontSize:'8px'}}>length should be greter than 7</p>}
        </div>
        <div>
          <button type="submit" className={classes.button}>Login</button>
          </div>
        </div>
        </div>
      </form>
  )
}

export default Login