import logo from '../assets/zinema_logo.png'
import userLogo from '../assets/user_logo.png'
import { Link } from "react-router-dom";


function Header(){

    return(
        <div className="w-full h-[80px] py-4 flex justify-between align-middle">
            <div className="flex items-center">
                <img className='w-[50px]' src={logo} alt="" />
                <h4 className='font-poppins text-2xl font-bold ml-3 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent'>Zinema</h4>
            </div>
            <div className='flex w-2/5 justify-between items-center font-roboto font-semibold '>
                <Link to="/home" className='hover:text-amber-900 hover:-translate-y-0.5 transition delay-50 py-2 px-4 rounded-2xl hover:bg-amber-100' href="">Home</Link>
                <Link to="/watchlist" className='hover:text-amber-900 hover:-translate-y-0.5 transition delay-50 py-2 px-4 rounded-2xl hover:bg-amber-100' href="">WatchList</Link>
                <Link to="/watched" className='hover:text-amber-900 hover:-translate-y-0.5 transition delay-50 py-2 px-4 rounded-2xl hover:bg-amber-100' href="">Watched</Link>
                <Link to="/favs" className="'hover:text-amber-900 hover:-translate-y-0.5 transition delay-50 py-2 px-4 rounded-2xl hover:bg-amber-100">Favs</Link>

                <div>
                    <img className='w-10 cursor-pointer' src={userLogo} alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Header;