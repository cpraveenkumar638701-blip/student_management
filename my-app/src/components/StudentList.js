import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    const data =
      JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure?")) {
      let data =
        JSON.parse(localStorage.getItem("students")) || [];

      data.splice(index, 1);

      localStorage.setItem("students", JSON.stringify(data));

      loadStudents();
    }
  };

  const handleUpdate = (index) => {
    navigate(`/StudentForm?index=${index}`);
  };

  return (
    <div className="container">
      <h2>Student Details</h2>

      <Link to="/StudentForm">
        <button>Add Student</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.rollNo}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.course}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>

                <td>
                  <button
                    onClick={() => handleUpdate(index)}
                  >
                    Update
                  </button>
                </td>
                <td>
                      <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No Student Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;