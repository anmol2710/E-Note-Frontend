import React from 'react'
import { Link } from "react-router-dom";

const EM = () => {
    return (
        <>
            <div className="card bg-slate-700 text-white" >
                <div className="card-body">
                    <h3 className="card-title text-2xl">Electrical Measurements	 (EM)</h3>
                    <div className="container div">
                        <Link to="/notes/EM" className="btn btn-primary">Notes</Link>
                        <Link to="/Lab-notes/EM" className="btn btn-primary">Lab Work</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EM