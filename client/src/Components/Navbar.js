import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href='/'>Home</a>
                <form className="form-inline">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <Link to="/song" className="btn btn-primary">Add Song</Link>
                </form>
            </nav>


        </div>
    )
}
