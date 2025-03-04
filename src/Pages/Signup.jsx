import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/signup", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        if (res.status == 200) navigate("/login");
      });
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={onSubmit}
    >
      <h1>Signup Page</h1>

      <input
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        type="text"
        placeholder="username"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        type="password"
        placeholder="password"
      />

      <button>Sign Up</button>

      <Link to={"/login"}>Login</Link>
    </form>
  );
}

export default SignupPage;
