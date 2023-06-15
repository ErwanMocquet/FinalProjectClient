import { Link, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext";
import Forside from "./pages/Forside";
import PBDatabase from "./pages/PBDatabase";
import Referencer from "./pages/Referencer";
import Produkter from "./pages/Produkter";
import Kontakt from "./pages/Kontakt";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Privatlivspolitik from "./pages/Privatlivspolitik";
import Hovedside from "./pages/Hovedside";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import "./css/index.css";
import logo from "./img/logo.png";
import NavbarGeneral from "./components/NavbarGeneral";

function App() {
  const [authState, setAuthState] = useState({
    email: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({
            ...authState,
            status: false,
          });
        } else {
          setAuthState({
            email: response.data.email,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      email: "",
      id: 0,
      status: false,
    });
    window.location.href = "/";
  };

  return (
    <Router>
      <div className="app">
        <AuthContext.Provider value={{ authState, setAuthState }}>
          {!authState.status ? (
            <NavbarGeneral />
          ) : (
            <nav className="nav-cont">
              <div className="logo-cont">
                <Link to="/hovedside">
                  <img
                    src={logo}
                    alt="Provide Business - Database Logo"
                    className="logo"
                  />
                </Link>
              </div>
              <ul className="nav-items">
                <li className="nav-item">
                  <Link to="/hovedside">General</Link>
                </li>
                <li className="nav-item">
                  <Link to="/search">Search</Link>
                </li>
              </ul>
              <div className="nav-buttons">
                <Link to={`/profile/${authState.id}`} className="btn">
                  <h1>Min profile </h1>
                </Link>
                <button onClick={logout} className="btn-logout exo-font">
                  {" "}
                  Log ud
                </button>
              </div>
            </nav>
          )}
          <Routes>
            <Route index element={<Forside />} />
            <Route path="/pbdatabase" element={<PBDatabase />} />
            <Route path="/referencer" element={<Referencer />} />
            <Route path="/produkter" element={<Produkter />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
            <Route path="/hovedside" element={<Hovedside />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/profile/:id" exact element={<ProfilePage />} />
            <Route
              path="*"
              element={
                <p>Sorry, but this URL does not exist! Try another one.</p>
              }
            />
          </Routes>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
