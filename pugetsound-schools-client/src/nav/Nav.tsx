import React from 'react'
import { Link } from 'react-router-dom'

interface IUser_UpdateToken { 
    user: Object | null, 
    updateToken: (newToken: string)=>void 
 } 

 

const Nav: React.FC< IUser_UpdateToken > = props => {
  const handleLogout = (event: React.FormEvent) => {
    event.preventDefault()
    // TODO: Remove the token from localstorage (or cookies)
    // TODO: Update the state of the App
    props.updateToken('')
  }

  let links = (
    <span>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </span>
  )

  // TODO: If the user is logged in, show profile page and logout links
 if (props.user){
   links =(
     <span>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <a href='/' onClick={handleLogout}>Logout</a>
        </li>
     </span>
   )
 }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {links}
      </ul>
    </nav>
  )
}

export default Nav
