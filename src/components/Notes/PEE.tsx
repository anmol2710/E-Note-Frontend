import React from 'react'
import { Link } from "react-router-dom"

const PEE = () => {
    return (
        <>
            <>
                <div className="card bg-slate-700 text-white" >
                    <div className="card-body">
                        <h3 className="card-title text-2xl">Principles of Electrical Engineering (PEE)</h3>
                        <div className="container div">
                            <Link to="/notes/PEE" className="btn btn-primary bg-indigo-600">Notes</Link>
                            <Link to="/Lab-notes/PEE" className="btn btn-primary">Lab Work</Link>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default PEE