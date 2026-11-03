import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function StudentForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const editIndex = searchParams.get("index");

  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
    if (editIndex !== null) {
      const students =
        JSON.parse(localStorage.getItem("students")) || [];

      setStudent(students[editIndex]);
    }
  }, [editIndex]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let students =
      JSON.parse(localStorage.getItem("students")) || [];

    if (editIndex !== null) {
      students[editIndex] = student;
      alert("Student Updated Successfully");
    } else {
      students.push(student);
      alert("Student Registered Successfully");
    }

    localStorage.setItem("students", JSON.stringify(students));

    navigate("/Studentlist");
  };

  return (
    <div className="tablecontainer">
      <h2>
        {editIndex !== null
          ? "Update Student"
          : "Student Registration"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={student.rollNo}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />

        <select
          name="course"
          value={student.course}
          onChange={handleChange}
          required
        >
          <option value="">Select Course</option>
          <option>BCA</option>
          <option>B.Sc</option>
          <option>B.Com CA</option>
          <option>B.Tech</option>
          <option>MCA</option>
        </select>

        <div className="gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={student.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={student.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
        />

        <button type="submit">
          {editIndex !== null ? "Update" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;