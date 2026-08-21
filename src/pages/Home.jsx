import React, { useEffect, useState } from 'react'
import Student from '../components/Student'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [students, setStudents] = useState([])

    async function studentInfo() {
        // let res = await fetch("http://localhost:3000/students")
        // let stds = await res.json()
        let res = await axios.get("https://students-wy23.onrender.com/students")
        
        setStudents(res.data)
    }

    useEffect(() => {
        studentInfo()
    }, [])
    return (
    <div>

        <h1 className="student-header">
            Student Management
        </h1>

        <div className="d-flex justify-content-center mb-4">

            <Link
                className="btn add-student-btn"
                to="/create"
            >
                + Add Student
            </Link>

        </div>

        <div className="container pb-5">

            <div className="row g-4">

                {
                    students.map((student) => {

                        return (
                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={student.id}
                            >
                                <Student std={student} />
                            </div>
                        )

                    })
                }

            </div>

        </div>

    </div>
)
}

export default Home