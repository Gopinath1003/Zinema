import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { MovieProvider } from "./context/MovieContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Favs from "./pages/Favs";
import Watched from "./pages/Watched";
import Watchlist from "./pages/WatchList";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Header />
        <hr className="border-gray-300"/>
        <Routes>
          
          {/* Public Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/watchlist" element={<Watchlist />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <hr className="text-gray-400" />
                  <Home />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
