import React from 'react'
import { Link } from "react-router-dom"

const CP = () => {
    return (
        <>
            <>
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Computer Programming	(CP)</h3>
                        <Link to="/notes/CP" className="btn btn-primary">Notes</Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default CP