import React from 'react'
import { Link } from "react-router-dom"

const CP = () => {
    return (
        <>
            <>
                <div className="card bg-slate-700 text-white" >
                    <div className="card-body">
                        <h3 className="card-title text-2xl">Computer Programming	(CP)</h3>
                        <div className="container div">
                            <Link to="/notes/CP" className="btn btn-primary">Notes</Link>
                            <Link to="/Lab-notes/CP" className="btn btn-primary">Lab Work</Link>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default CP