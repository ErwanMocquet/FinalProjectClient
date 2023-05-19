import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import Logo from "../img/logo.png";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()

  const Login = () => {
    const data = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        Cookies.set("access-token", response.data, { expires: 1 });
        navigate("/hovedside")
      }
    });
  };

  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Log på | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <nav className="nav-login">
        <div className="logo-cont">
          <Link to="/">
            <img
              src={Logo}
              alt="Provide Business - Database Logo"
              className="logo-login"
            />
          </Link>
        </div>
      </nav>
      <section className="section-login">
        <div className="login-container">
          <h1 className="darkblue-font exo-font subtitle title-margin">
            Log på
          </h1>
          <input
            type="text"
            placeholder="Din email..."
            className="input-login"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Din kodeord..."
            className="input-login"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="buttons-login-cont">
            <Link
              to="/register"
              className="link-login roboto-font general-content"
            >
              Opret konto
            </Link>
            <div className="button-login-cont">
              <button className="button-login roboto-font" onClick={Login}>
                Log på
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
