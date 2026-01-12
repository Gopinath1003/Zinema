import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
      <div className="w-full max-w-md bg-white rounded-3xl px-8 py-10 shadow-lg">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#f2d2b3] rounded-full flex items-center justify-center text-2xl">
            😊
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-[#7a5a44]">
          Welcome back
        </h2>
        <p className="text-center text-[#b19580] mt-2">
          Sign in to your Zinema space
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-5 py-4 rounded-full border border-[#f0b38a] bg-[#fff6f0] focus:outline-none focus:ring-2 focus:ring-[#f0b38a]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!email && (
              <p className="text-sm text-[#f08c5a] mt-1">
                Please enter your email address
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full px-5 py-4 rounded-full border border-[#f0b38a] bg-[#fff6f0] focus:outline-none focus:ring-2 focus:ring-[#f0b38a]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-5 top-4 cursor-pointer text-[#a58a73]"
            >
              👁
            </span>
            {!password && (
              <p className="text-sm text-[#f08c5a] mt-1">
                Please enter your password
              </p>
            )}
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm text-[#9a7d66]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#f0b38a]" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#f2d2b3] to-[#e8b48a] text-[#6b4b34] font-semibold hover:opacity-90 transition"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-[#9a7d66] mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="font-semibold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
