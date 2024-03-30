import React , {useState} from 'react'
import {Link , useNavigate} from "react-router-dom"
import { motion } from "framer-motion"
import { AuroraBackground } from '../components/ui/aurora-background'
import { BackgroundGradient } from '../components/ui/background-gradient'
import {ToastContainer , toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {SignUpRoute} from "../utils/Routes"

const Signup = () => {
    const navigate = useNavigate();

    const [name , setName] = useState("");
    const [rollNo , setRollNo] = useState("");
    const [password , setPassword] = useState("");
    const [cpassword , setCPassword] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    async function handleSignup(e:any) {
        e.preventDefault();
        if(name.length < 2){
            toast.error("Please enter a valid name");
            return;
        }
        else if(rollNo.length !== 11){
            toast.error("Please enter a valid Roll No");
            return;
        }
        else if(password.length < 8){
            toast.error("Password should be greater than 8 digits")
            return;
        }
        else if(password !== cpassword){
            toast.error("Password does not match")
            return;
        }
        setIsLoading(true);
        const response = await fetch(SignUpRoute ,{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name , rollNo , password})
        })

        const responseData = await response.json();
        if(responseData.status){
            localStorage.setItem("user", JSON.stringify(responseData.msg))
            navigate("/notes");
        }
        else{
            setIsLoading(false);
            toast.error(responseData.msg)
        }

    }


    return (
        <div className=' flex items-center justify-center'>
            <AuroraBackground className=' w-screen h-screen'>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <BackgroundGradient className='p-2'>
                        <section className=" flex flex-col gap-4 rounded-[22px] px-10 py-10 bg-gray-50 dark:bg-gray-900 md:px-20">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-2 md:space-y-4" onSubmit={handleSignup}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" onChange={e=>{setName(e.target.value)}} />
                                </div>
                                <div>
                                    <label htmlFor="rollNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Roll No</label>
                                    <input type="rollNo" name="rollNo" id="rollNo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Roll No" onChange={e=>{setRollNo(e.target.value)}} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>{setPassword(e.target.value)}} />
                                </div>
                                <div>
                                    <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="cpassword" name="cpassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>{setCPassword(e.target.value)}} />
                                </div>
                                <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-white">Create an account {isLoading && <i className ="fa-solid fa-spinner fa-spin"></i>}</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </section>
                    </BackgroundGradient>
                </motion.div>
            </AuroraBackground>
            <ToastContainer/>
        </div>
    )
}

export default Signup