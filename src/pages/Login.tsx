import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginRoute } from "../utils/Route"
import { useNavigate } from "react-router-dom";

interface LoginProps {
    setIsLoggedIn: Function
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [rollNo, setRollNo] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: any) {
        e.preventDefault();
        if (rollNo.length !== 11) {
            toast.error("Roll no is not valid")
        }
        else if (password.length < 8) {
            toast.error("Password must be at least 8 characters")
        }
        else {
            const response = await fetch(loginRoute, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rollNo, password }),
            })
            const responseData = await response.json();
            if (responseData.status) {
                localStorage.setItem("user", JSON.stringify(responseData.msg))
                setIsLoggedIn(true);
                navigate("/");
            }
            else {
                toast.error(responseData.msg)
            }
        }
    }

    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="rollNo" className="form-label">Roll No</label>
                        <input type="text" className="form-control" name='rollNo' id="rollNo" onChange={(e) => { setRollNo(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login