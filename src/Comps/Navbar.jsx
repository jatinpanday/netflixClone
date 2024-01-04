import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='nav'>
            <Link style={{ marginRight: "30%" }} to={`/signUp`}>
                <img src='assets/logo2.png' alt="logo" />
            </Link>
            <div style={{ marginTop: "3%" }}>
                <select className="language">
                    <option value="English"> English </option>
                    <option value="Hindi"> Hindi  </option>
                </select>
                <button className='signInBtn'>
                    <Link className="link" to="/signIn">
                        Sign In
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Layout