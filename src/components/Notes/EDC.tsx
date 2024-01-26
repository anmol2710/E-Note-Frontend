import React from 'react'
import { Link } from "react-router-dom"

const EDC = () => {
    return (
        <>
            <>
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Electronics Devices and Circuits (EDC)</h3>
                        <Link to="/notes/EDC" className="btn btn-primary">Notes</Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default EDC