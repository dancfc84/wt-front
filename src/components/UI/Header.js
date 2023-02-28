import { NavLink } from "react-router-dom"


export default function Header() {

  return (
  <>
    <div>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/create">
        Create Account
      </NavLink>
      <NavLink to="/create">
        Add Species
      </NavLink>
      <NavLink to="/profile">
        Species
      </NavLink>
      <NavLink to="/profile">
        Latest Observations
      </NavLink>
      <NavLink to="/profile">
        Profile
      </NavLink>
      <NavLink to="/profile">
        About
      </NavLink>
      <NavLink to="/profile">
        Contacts
      </NavLink>
    </div>
  </>
  )
}