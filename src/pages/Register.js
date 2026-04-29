import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    gender: "",
    skills: [],
    address: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckbox = (e) => {

    let updatedSkills = [...form.skills];

    if(e.target.checked){

      updatedSkills.push(e.target.value);

    } else {

      updatedSkills =
      updatedSkills.filter(
        skill => skill !== e.target.value
      );
    }

    setForm({
      ...form,
      skills: updatedSkills
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/success");
  };

  return (

    <div className="container">

      <div className="card">

        <h2>Student Registration</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
          />

          <select
            name="course"
            onChange={handleChange}
          >

            <option value="">
              Select Course
            </option>

            <option>CSE</option>
            <option>ECE</option>
            <option>IT</option>

          </select>

          <div className="gender">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              Female
            </label>

          </div>

          <div className="skills">

            <label>
              <input
                type="checkbox"
                value="Java"
                onChange={handleCheckbox}
              />
              Java
            </label>

            <label>
              <input
                type="checkbox"
                value="Python"
                onChange={handleCheckbox}
              />
              Python
            </label>

            <label>
              <input
                type="checkbox"
                value="React"
                onChange={handleCheckbox}
              />
              React
            </label>

          </div>

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <button type="submit">
            Submit Registration
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;