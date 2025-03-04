import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function LoginPage() {
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
      .post("http://localhost:8080/login", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        if (res.status == 200 && res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
        }
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
      <h1>Login Page</h1>

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

      <button>Login</button>

      <Link to={"/signup"}>Sign Up</Link>
    </form>
  );
}

export default LoginPage;
