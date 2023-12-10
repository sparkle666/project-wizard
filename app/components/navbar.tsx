import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Project Wizard</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Contact</a></li>
      <li><a>About Us</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar