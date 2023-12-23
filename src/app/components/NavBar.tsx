"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavBarProps {

}

const NavBar = ({ }: NavBarProps) => {

  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  }

  return (
    <nav>
      <div className="nav-bar">
        <Link href="/">Logo</Link>
        <div className="links">
          <Link className="link" href="/coaching">Coaching</Link>
          <Link className="link" href="/guides">Guides</Link>
          <Link className="link" href="/about">About</Link>
          <Link className="link" href="/freebies">Freebies</Link>
        </div>
        <button onClick={handleContact}>Contact Me</button>
      </div>
    </nav>
  )
}

export default NavBar;