import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/home'
import Content from '../pages/content'
import Contact from '../pages/contact'


class Navbar extends React.Component {
    render() {
        return (
            <nav>
                 <ul id='navbar'>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/content'>
                <li>Services</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
            </ul>
            </nav>
        )
    }
}

export default Navbar;