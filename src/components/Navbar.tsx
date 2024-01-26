import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"

interface NavProps {
    isLoggedin: boolean,
    setIsLoggedIn: Function
}

const Navbar: React.FC<NavProps> = ({ isLoggedin, setIsLoggedIn }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true)
        }
    }, [isLoggedin, setIsLoggedIn])

    function handleLogout() {
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        navigate("/login")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">E-Notes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                !isLoggedin ?
                                    <>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`} to="/signup">Create Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Sign in</Link>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item">
                                            <button type="button" onClick={handleLogout} className="btn btn-danger">Logout</button>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar