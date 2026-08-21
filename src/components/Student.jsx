import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Student = (props) => {

    function handleDelete(stdId) {

        async function deleteStd() {

            await axios.delete(
                `https://students-wy23.onrender.com/students/${stdId}`
            )
            window.location.reload()
        }

        deleteStd()
    }


    return (

        <div className="student-card card">

            <div className="card-body">

                {/* Student Name */}

                <h5 className="student-name">
                    {props.std.name}
                </h5>


                {/* Course */}

                <p className="student-info">
                    <strong>Course:</strong> {props.std.course}
                </p>


                {/* Age */}

                <p className="student-info">
                    <strong>Age:</strong> {props.std.age}
                </p>


                {/* Location */}

                <p className="student-info">
                    <strong>Location:</strong> {props.std.location}
                </p>


                {/* Marks */}

                <p className="student-info">
                    <strong>Marks:</strong> {props.std.marks}
                </p>


                {/* Attendance */}

                {
                    props.std.isPresent

                        ?

                        <span className="attendance-badge present">
                            ● Present
                        </span>

                        :

                        <span className="attendance-badge absent">
                            ● Absent
                        </span>
                }


                {/* Action Buttons */}

                <div className="student-actions">

                    {/* View */}

                    <Link
                        className="btn view-btn"
                        to={`/view/${props.std.id}`}
                    >
                        View
                    </Link>


                    {/* Edit */}

                    <Link
                        className="btn edit-btn"
                        to={`/edit/${props.std.id}`}
                    >
                        Edit
                    </Link>


                    {/* Delete */}

                    <button
                        className="btn delete-btn"
                        onClick={() =>
                            handleDelete(props.std.id)
                        }
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Student