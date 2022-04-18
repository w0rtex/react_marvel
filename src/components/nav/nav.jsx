import {Component} from "react";
import {Link, NavLink} from 'react-router-dom'

const Nav = (props) => {
    const activeState = ({isActive}) => {
        return isActive ? 'active' : null
    }

    return (
        <nav>
            <div className="title">
                <Link to={'/'}>Marvel</Link> information portal
            </div>
            <div className="nav">
                <NavLink end className={activeState} to="/">Characters</NavLink>
                <NavLink className={activeState} to="/shop">Comics</NavLink>
            </div>
        </nav>
    )
}

export default Nav