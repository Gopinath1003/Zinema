import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
    <div className=" w-[600px] h-[300px] p-5 flex  rounded-2xl border border-gray-300 shadow-lg">
      <div className="w-1/2 p-5">
        <h2 className="text-2xl font-medium pb-6">Login to Zinema</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
          className="border rounded-lg pl-4 h-10 active:border-amber-500"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
          className="border rounded-lg pl-4 h-10 active:border-amber-500"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="text-white font-medium text-lg rounded-lg h-10 bg-amber-500" type="submit">Login</button>
        </form>
      </div>
      <div className="w-1/2 p-3 bg-amber-500 rounded-lg text-white flex flex-col justify-around items-center">
        <h2 className="text-xl font-medium text-black">From discovery to watchlist</h2>
        <p className="text-center">Zinema is a modern movie web application that lets users discover trending films and manage their personal movie experience.Users can securely log in to add movies to favorites, watch later, or watched lists, all personalized to their account.</p>
      </div>
    </div>
    </div>
  );
};

export default Login;
