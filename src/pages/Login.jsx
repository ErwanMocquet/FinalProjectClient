import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate()

  const Login = () => {
    const data = {
      email: email,
      password: password,
    };
    axios.post("https://final-project-eaaa.herokuapp.com/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          email: response.data.email,
          id: response.data.id,
          status: true,
        })
        navigate("/hovedside")
      }
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      Login();
    }
  };

  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Log på | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
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
            autoComplete="email"
            name="email"
          />
          <input
            type="password"
            placeholder="Din kodeord..."
            className="input-login"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            onKeyDown={handleKeyPress}
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
