import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'

// console.log(props)

const Layout = (props) => (
    <div className='layout'>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
)

export default Layout