import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpRoute } from "../utils/Route"
import { useNavigate, Link } from "react-router-dom"

const CreateAccount = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [isloading, setIsLoading] = useState(false)

    async function handleSignup(e: any) {
        e.preventDefault();

        if (name.length < 3) {
            toast.error("Name is invalid");
        } else if (rollNo.length !== 11) {
            toast.error("Roll No is invalid");
        } else if (password.length < 8) {
            toast.error("Password must be at least 8 characters");
        } else if (password.trim() !== Cpassword.trim()) {
            toast.error("Password does not match");
        } else {
            setIsLoading(true);
            const response = await fetch(signUpRoute, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, rollNo, email, password }),
            });
            const responseData = await response.json();
            setIsLoading(false);
            if (responseData.status) {
                localStorage.setItem("user", JSON.stringify(responseData.msg));
                navigate("/");
            } else {
                toast.error(responseData.msg);
            }
        }
    }

    return (
        <>
            <section className="vh-80 mt-4">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="__" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSignup}>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-white" htmlFor="name">Name</label>
                                    <input type="text" id="name" name='name' className="form-control form-control-lg"
                                        placeholder="Enter name" onChange={e => { setName(e.target.value) }} />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-white" htmlFor="rollNo">Roll No</label>
                                    <input type="text" name='rollNo' id="rollNo" className="form-control form-control-lg"
                                        placeholder="Enter Roll No" onChange={e => { setRollNo(e.target.value) }} />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-white" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter  email address" onChange={e => { setEmail(e.target.value) }} />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label text-white" htmlFor="password">Password</label>
                                    <input type="password" id="password" name='password' className="form-control form-control-lg"
                                        placeholder="Enter password" onChange={e => { setPassword(e.target.value) }} />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label text-white" htmlFor="Cpassword">Confirm Password</label>
                                    <input type="password" id="Cpassword" name='Cpassword' className="form-control form-control-lg"
                                        placeholder="Enter confirm password" onChange={e => { setCpassword(e.target.value) }} />
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg bg-indigo-600"
                                    >Sign up {isloading ? <i className="fa-solid fa-spinner fa-spin-pulse" ></i> : <></>} </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0 text-white">Already have an account? <Link to="/login    "
                                        className="text-red-500">Sign in</Link></p>
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

export default CreateAccount