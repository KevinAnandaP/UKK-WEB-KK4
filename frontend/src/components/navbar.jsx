import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const Logout = async() =>{
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="data:image/jpeg;base64,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" width="112" height="28" alt='logo'/>
                </a>

                <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a href='/' className="navbar-item">
                    Home
                </a>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button onClick={Logout} className="button is-light">
                        Log Out
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
