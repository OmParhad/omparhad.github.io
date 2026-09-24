import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()} {` `}
      <Link to="/">Om Parhad</Link>
      {` | `}
      <Link to="/cv">CV</Link>
      {` | `}
      <Link to="/projects">Projects</Link>
    </footer>
  )
}

export default Footer
