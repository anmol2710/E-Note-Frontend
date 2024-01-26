import React from 'react'
import { Link } from "react-router-dom"

const PEE = () => {
    return (
        <>
            <>
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Principles of Electrical Engineering (PEE)</h3>
                        <Link to="/notes/PEE" className="btn btn-primary">Notes</Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default PEE