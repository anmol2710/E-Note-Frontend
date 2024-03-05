import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

interface NavProps {
    isLoggedin: boolean,
    setIsLoggedIn: Function
}

const Navbar: React.FC<NavProps> = ({ isLoggedin, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [isOpen, SetIsOpen] = useState(false)

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
            <nav className="w-full h-16 m-0 bg-slate-800 flex justify-between px-4 items-center">
                <div className="text-2xl font-bold text-white"><Link to="/">E-Notes</Link></div>
                <div className="flex gap-2 flex-wrap">
                    {
                        !isLoggedin ? <>
                            <div className="hidden md:block p-2 text-white font-bold rounded-md"><Link to="/">Home</Link></div>
                            <div className="hidden md:block p-2 text-white font-bold rounded-md"><Link to="/signup">Create Account</Link></div>
                            <div className="hidden md:block p-2 text-white font-bold rounded-md"><Link to="/login">Sign In</Link></div>

                        </> : <>

                            <div className="hidden md:block p-2  text-white font-bold rounded-md"><Link to="/">Home</Link></div>
                            <div className="hidden md:block p-2 bg-red-700 text-white font-bold rounded-md"><button onClick={handleLogout}>Logout</button></div>
                        </>
                    }

                </div>
                <div className=" text-4xl md:hidden text-white"><button onClick={() => { SetIsOpen(!isOpen) }}>&#8801;</button></div>
            </nav>
            {
                isOpen ?
                    <div className='flex flex-col items-center bg-slate-800 gap-2 p-1 transition-a'>
                        {
                            !isLoggedin?<>
                            <div className="block md:hidden p-2 bg-indigo-800 text-white font-bold rounded-md w-40 text-center"><Link to="/">Home</Link></div>
                            <div className="block md:hidden p-2 bg-indigo-800 text-white font-bold rounded-md w-40 text-center"><Link to="/">Create Account</Link></div>
                            <div className="block md:hidden p-2 bg-indigo-800 text-white font-bold rounded-md w-40 text-center"><Link to="/">Sign In</Link></div>
                            </>:<>
                        
                            <div className="block md:hidden p-2 bg-indigo-800 text-white font-bold rounded-md w-40 text-center"><Link to="/">Home</Link></div>
                            <div className="block md:hidden p-2 bg-red-700 text-white font-bold rounded-md w-40 text-center"><button onClick={handleLogout}>Logout</button></div>
                            </>
                        }
                    </div> : <></>
            }
        </>
    )
}

export default Navbar