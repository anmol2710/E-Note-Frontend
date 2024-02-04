import React from 'react'
import { Link } from "react-router-dom"

const EDC = () => {
    return (
        <>
            <>
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Electronics Devices and Circuits (EDC)</h3>
                        <div className="container div">
                            <Link to="/notes/EDC" className="btn btn-primary">Notes</Link>
                            <Link to="/Lab-notes/EDC" className="btn btn-primary">Lab Work</Link>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default EDC