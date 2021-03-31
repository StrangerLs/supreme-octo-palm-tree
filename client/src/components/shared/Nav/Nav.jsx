import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
        <div className="nav">
          <h1>Supreme Octo</h1>
          <h3><em>Palm Tree</em></h3>
                <div className="links">
                <NavLink to="/">Home</NavLink>
                    <NavLink to="/add-post">Add Post</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav