import React from 'react'
import { Link } from "react-router-dom"

const PEE = () => {
    return (
        <>
            <>
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Principles of Electrical Engineering (PEE)</h3>
                        <div className="container div">
                            <Link to="/notes/PEE" className="btn btn-primary">Notes</Link>
                            <Link to="/Lab-notes/PEE" className="btn btn-primary">Lab Work</Link>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default PEE