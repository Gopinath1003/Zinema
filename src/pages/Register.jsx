import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully! Now login.");
    navigate("/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Create Zinema Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
