import React from "react";

interface NavBarProps {

}

const NavBar = ({ }: NavBarProps) => {

  return (
    <nav>
      <div>
        <h4>Navigation Bar</h4>
      </div>
      <div className="nav-bar">
        <p>Logo</p>
        <p>About</p>
        <p>Programs</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
    </nav>
  )
}

export default NavBar;