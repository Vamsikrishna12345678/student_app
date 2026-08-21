import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const View = () => {
  let [std, setStd] = useState({})

  let { id } = useParams()

  async function getStudent() {
    let res = await axios.get(`https://students-wy23.onrender.com/students/${id}`)
    setStd(res.data)

  }
  useEffect(() => {
    getStudent()
  }, [])

  return (
    <div>
      <h1>Student details of {std.name}</h1>
      <div className="card" style={{ width: "18rem" }}>

        <div className="card-body">
          <p className="card-text">Name:{std.name}</p>
          <p className="card-text">Age:{std.age}</p>
          <p className="card-text">Course:{std.course}</p>
          <p className="card-text">Marks:{std.marks}</p>
          <p className="card-text">Locatoin:{std.location}</p>
          {std.isPresent ? <button href="#" className="btn btn-success btn-sm">Present</button>:<button href="#" className="btn btn-danger btn-sm">absent</button>}
          <Link className="btn btn-warning btn-sm mx-2" to= {"/"}>Home</Link>
        </div>
      </div>

    </div>
  )
}

export default View