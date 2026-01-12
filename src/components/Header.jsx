import logo from "../assets/zinema_logo.png";
import userLogo from "../assets/user_logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const navClass = ({ isActive }) =>
    `py-2 px-4 rounded-2xl transition delay-50 hover:-translate-y-0.5
   hover:text-amber-900 hover:bg-amber-100
   ${isActive ? "bg-amber-200 text-amber-900 font-semibold" : ""}`;

  return (
    <div className="w-full h-[80px] py-4 flex justify-between align-middle">
      <div className="flex items-center">
        <NavLink
          to="/home"
          end
          className="flex items-center hover:opacity-90 transition"
        >
          <img className="w-[50px]" src={logo} alt="Zinema logo" />
          <h4 className="font-poppins text-2xl font-bold ml-3 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            Zinema
          </h4>
        </NavLink>
      </div>
      <div className="flex w-2/5 justify-between items-center font-roboto font-semibold ">
        <NavLink to="/home" className={navClass}>
          Home
        </NavLink>

        <NavLink to="/watchlist" className={navClass}>
          WatchList
        </NavLink>

        <NavLink to="/watched" className={navClass}>
          Watched
        </NavLink>

        <NavLink to="/favs" className={navClass}>
          Favs
        </NavLink>

        <div>
          <img className="w-10 cursor-pointer" src={userLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
