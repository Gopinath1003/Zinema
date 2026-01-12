import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
      <div className="w-full max-w-md bg-white rounded-3xl px-8 py-10 shadow-lg">
        
        <h2 className="text-3xl font-semibold text-center text-[#7a5a44]">
          Join Zinema
        </h2>
        <p className="text-center text-[#b19580] mt-2">
          Create your peaceful movie space
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-5 py-4 rounded-full border border-[#f0b38a] bg-[#fff6f0]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-5 py-4 rounded-full border border-[#f0b38a] bg-[#fff6f0]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 rounded-full border border-[#f0b38a] bg-[#fff6f0]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#f2d2b3] to-[#e8b48a] text-[#6b4b34] font-semibold"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-[#9a7d66] mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
