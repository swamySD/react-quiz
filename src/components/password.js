import React from 'react'

const Password = () => {
  return (
    
         <form action="" className='w-1/2 border border-indigo-500 mb-10'>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" 
                autocomplete="new-password"/>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone"/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
            </form>
    
  )
}

export default Password