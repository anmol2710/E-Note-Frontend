import React from 'react'
import { Link } from "react-router-dom";

const EM = () => {
    return (
        <>
            <>
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Electrical Measurements	 (EM)</h3>
                        <Link to="/notes/EM" className="btn btn-primary">Notes</Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default EM