import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo3 from "../assets/logo3.png";
import "../styles/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { name, email, password });
      window.location.href = "/login";
    }
    catch (err) {
      console.error("Registration Error:", err.response);
      setError(err.response?.data?.message || "Registration Failed");
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={logo3} alt="Tripigo Logo" className="logo" />
        <h2>Welcome to Tripigo</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Create a Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign up</button>
        </form>

        <p className="login-link">
          <Link to="/login">Already a member? Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;