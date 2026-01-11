import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path ? "text-yellow-400" : "text-white";

  return (
    <nav className="bg-black text-white px-8 py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent tracking-wide">
          Subha Mariappan
        </h1>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV ITEMS */}
        <div
          className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {/* BEFORE LOGIN */}
          {!user && (
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <Link
                to="/login"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black transition"
              >
                Signup
              </Link>
            </div>
          )}

          {/* AFTER LOGIN */}
          {user && (
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 font-medium">
              {["/", "/about", "/projects", "/contact"].map((path, i) => (
                <Link
                  key={i}
                  to={path}
                  className={`${isActive(path)} relative group`}
                  onClick={() => setMenuOpen(false)}
                >
                  {/* ✔ Only Home changed to HOME */}
                  {path === "/"
                    ? "HOME"
                    : path.replace("/", "").toUpperCase()}

                  {/* underline animation */}
                  <span className="block h-0.5 bg-yellow-400 w-0 group-hover:w-full transition-all"></span>
                </Link>
              ))}

              <button
                onClick={handleLogout}
                className="border px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
