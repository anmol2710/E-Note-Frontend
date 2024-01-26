import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpRoute } from "../utils/Route"
import { useNavigate } from "react-router-dom"

const CreateAccount = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [branch, setBranch] = useState("");

    async function handleSignup(e: any) {
        e.preventDefault();

        try {
            if (name.length < 3) {
                toast.error("Name is invalid");
            } else if (rollNo.length !== 11) {
                toast.error("Roll No is invalid");
            } else if (password.length < 8) {
                toast.error("Password must be at least 8 characters");
            } else if (password.trim() !== Cpassword.trim()) {
                toast.error("Password does not match");
            } else {
                setBranch(rollNo.charAt(5) + rollNo.charAt(6));
                const response = await fetch(signUpRoute, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, rollNo, email, password, branch }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                if (responseData.status) {
                    localStorage.setItem("user", JSON.stringify(responseData.msg));
                    navigate("/");
                } else {
                    toast.error(responseData.msg);
                }
            }
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    }


    return (
        <>
            <div className="container">
                <h1>Signup</h1>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rollNo" className="form-label">Roll No</label>
                        <input type="text" className="form-control" id="rollNo" name='rollNo' onChange={(e) => { setRollNo(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' id="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={(e) => { setCpassword(e.target.value) }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default CreateAccount