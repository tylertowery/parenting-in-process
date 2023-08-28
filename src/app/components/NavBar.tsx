import React from "react";
import Link from "next/link";

interface NavBarProps {

}

const NavBar = ({ }: NavBarProps) => {

  return (
    <nav>
      <div>
        <h4>Navigation Bar</h4>
      </div>
      <div className="nav-bar">
        <Link href="/">Logo</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar;