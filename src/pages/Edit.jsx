import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
      let [std,setStd] = useState({})
      let navigate = useNavigate()

      let [name, setName] = useState("")
      let [age, setAge] = useState("")
      let [course, setCourse] = useState("")
      let [marks, setMarks] = useState("")
      let [location, setLocation] = useState("")
      let [isPresent, setIsPresent] = useState(false)

      let {id} = useParams()

      async function editStudents() {
        let res  = await axios.get("https://students-wy23.onrender.com/students/" +id)
        
        setStd(res.data)
        setName(res.data.name)
        setAge(res.data.age)
        setCourse(res.data.course)
        setMarks(res.data.marks)
        setLocation(res.data.location)
        setIsPresent(res.data.isPresent)
      }
      useEffect(()=> {
        editStudents()
      },[])

      function handleSubmit(e) {
        e.preventDefault()
        let student = {
            "name": name,
            "course": course,
            "age": age,
            "location": location,
            "marks": marks,
            "isPresent": isPresent
        }
        async function addStudent(){
            await axios.put("https://students-wy23.onrender.com/students/"+id,student)
            navigate('/')
        }
        addStudent()
    }
  return (
    <>
    <h2 className='bg-primary align-items text-center'>Edit Student :{std.name}</h2>

    <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="w-50" onSubmit={handleSubmit}>
                <div className="mb-3 border border-dark p-4 rounded">

                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />

                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}

                    />

                    <label className="form-label">Course</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}

                    />

                    <label className="form-label">Marks</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                    />


                    <label className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="City"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}

                    />

                    <label className="form-label">Attendance</label>
                    <select className="form-select mb-3"
                        value={isPresent}
                        onChange={(e) => setIsPresent(e.target.value === "true")}

                    >
                        <option value="">Select Attendance</option>
                        <option value="true">Present</option>
                        <option value="false">Absent</option>

                    </select>

                    <button className="btn btn-primary">
                        Edit Student
                    </button>

                </div>
            </form>
        </div>
    </>
  )
}

export default Edit
