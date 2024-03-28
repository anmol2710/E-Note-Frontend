import React, { useState } from 'react'
import { Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "./ui/cn";
import { Link , useNavigate } from "react-router-dom"

const Navbar = () => {

    const [active, setActive] = useState<string | null>(null);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate("/")
    }

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}
        >
            <Menu setActive={setActive}>
                <div className=' flex items-center gap-4'>
                    <Link to="/notes">
                        <MenuItem setActive={setActive} active={active} item="Home">
                        </MenuItem>
                    </Link>
                    <button className=' p-2 bg-red-600 rounded-lg text-white' onClick={handleLogout}>Logout</button>
                </div>
            </Menu>
        </div>
    )
}

export default Navbar