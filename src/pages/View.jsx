import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./view.css"

const View = () => {

    let [std, setStd] = useState({})

    let { id } = useParams()

    async function getStudent() {
        let res = await axios.get(
            `https://students-wy23.onrender.com/students/${id}`
        )

        setStd(res.data)
    }

    useEffect(() => {
        getStudent()
    }, [])

    return (
        <div className="view-page">

            {/* Header */}

            <h1 className="view-header">
                Student Details
            </h1>


            {/* Card */}

            <div className="view-container">

                <div className="card view-card">

                    <div className="card-body">

                        <h2 className="view-name">
                            {std.name}
                        </h2>


                        <p className="view-info">
                            <strong>Name:</strong> {std.name}
                        </p>

                        <p className="view-info">
                            <strong>Age:</strong> {std.age}
                        </p>

                        <p className="view-info">
                            <strong>Course:</strong> {std.course}
                        </p>

                        <p className="view-info">
                            <strong>Marks:</strong> {std.marks}
                        </p>

                        <p className="view-info">
                            <strong>Location:</strong> {std.location}
                        </p>


                        {/* Attendance */}

                        <div>
                            {
                                std.isPresent
                                    ?
                                    <span className="view-attendance view-present">
                                        ● Present
                                    </span>
                                    :
                                    <span className="view-attendance view-absent">
                                        ● Absent
                                    </span>
                            }
                        </div>


                        {/* Home button */}

                        <div className="view-actions">

                            <Link
                                className="view-home-btn"
                                to="/"
                            >
                                ← Back to Home
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default View