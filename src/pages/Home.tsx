import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Maths from '../components/Notes/Maths';
import PEE from '../components/Notes/PEE';
import EM from '../components/Notes/EM';
import Physics from '../components/Notes/Physics';
import EDC from '../components/Notes/EDC';
import CP from '../components/Notes/CP';
// import { app } from "../Firebase"
// import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


// const db = getFirestore(app);

interface User {
    _id: string;
    name: string;
    rollNo: string;
    email: string;
    password: string;
    branch: string;
}

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({ _id: "", name: "", rollNo: "", email: "", password: "", branch: "" });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (!storedUser) {
            navigate('/login');
        } else {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, [navigate]);

    // async function getdata() {
    //     const docRef = collection(db, "EE");
    //     const q = query(docRef)
    //     const docs = await getDocs(q);
    //     docs.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // }

    return (
        <>
            <h1>Notes of All subjects of {user.branch} </h1>
            <div className="note-container container">
                <div className="row">
                    <PEE />
                    <Maths />
                    <EM />
                </div>
                <div className="row">
                    <Physics />
                    <EDC />
                    <CP />
                </div>
            </div>
        </>
    );
};

export default Home;
