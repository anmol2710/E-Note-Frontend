import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginRoute } from "../utils/Route"
import { useNavigate, Link } from "react-router-dom";

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
            <section >
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="__" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleLogin}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Roll No</label>
                                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter Roll no" onChange={e => { setRollNo(e.target.value) }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" onChange={e => { setPassword(e.target.value) }} />
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                    >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                                        className="link-danger">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Login