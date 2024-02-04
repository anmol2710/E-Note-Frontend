import React from 'react'
import { Link } from "react-router-dom";

const Maths = () => {
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <h3 className="card-title">Mathematics-II</h3>
                    <div className="container div">
                        <Link to="/Notes/Maths2" className="btn btn-primary">Notes</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maths