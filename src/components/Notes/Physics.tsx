import React from 'react'
import { Link } from "react-router-dom";

const Physics = () => {
    return (
        <>
            <div className="card bg-slate-700 text-white" >
                <div className="card-body">
                    <h3 className="card-title text-2xl">Introduction to Electromagnetic Theory (EMT)</h3>
                    <Link to="/notes/EMT" className="btn btn-primary">Notes</Link>
                </div>
            </div>
        </>
    )
}

export default Physics