import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Createstd = () => {

    let navigate = useNavigate()

    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [course, setCourse] = useState("")
    let [marks, setMarks] = useState("")
    let [location, setLocation] = useState("")
    let [isPresent, setIsPresent] = useState("")


    function handleSubmit(e) {
    e.preventDefault()

    // Check all fields
    if (
        name.trim() === "" ||
        age === "" ||
        course.trim() === "" ||
        marks === "" ||
        location.trim() === "" ||
        isPresent === ""
    ) {
        alert("Please fill all the fields")
        return
    }

    let student = {
        name: name,
        age: age,
        course: course,
        marks: marks,
        location: location,
        isPresent: isPresent === "true"
    }

    async function addStudent() {

        try {

            await axios.post(
                "https://students-wy23.onrender.com/students/",
                student
            )

            // After successful POST, go to Home
            navigate("/")

        } catch (error) {

            console.log(error)

            alert("Student was not added. Please try again.")

        }
    }

    addStudent()
}


    return (
        <div className="form-page">

            <h2 className="form-header">
                Create Student
            </h2>


            <div className="d-flex justify-content-center align-items-center">

                <form
                    className="student-form w-50"
                    onSubmit={handleSubmit}
                >

                    {/* Name */}

                    <label className="form-label">
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />


                    {/* Age */}

                    <label className="form-label">
                        Age
                    </label>

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />


                    {/* Course */}

                    <label className="form-label">
                        Course
                    </label>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />


                    {/* Marks */}

                    <label className="form-label">
                        Marks
                    </label>

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Enter marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        required
                    />


                    {/* Location */}

                    <label className="form-label">
                        Location
                    </label>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter city"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />


                    {/* Attendance */}

                    <label className="form-label">
                        Attendance
                    </label>

                    <select
                        className="form-select mb-3"
                        value={isPresent}
                        onChange={(e) => setIsPresent(e.target.value)}
                        required
                    >

                        <option value="">
                            Select Attendance
                        </option>

                        <option value="true">
                            Present
                        </option>

                        <option value="false">
                            Absent
                        </option>

                    </select>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Add Student
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Createstd