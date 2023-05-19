import { Link } from "react-router-dom";
import Logowhite from "../img/logo-white.png";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="upper-section-footer">
        <div className="first-div-grid">
          <Link to="/">
            <img
              src={Logowhite}
              alt="Logo Provide Business - Database"
              className="logo-footer"
            ></img>
          </Link>
          <div>
            <a
              className="general-content white-font roboto-font line-height-content"
              href="mailto:info@providebusiness.dk"
            >
              info@providebusiness.dk
            </a>
          </div>
          <div className="phone-footer-cont">
            <a
              className="general-content white-font roboto-font"
              href="tel:+4570345611"
            >
              +45 70 34 56 11
            </a>
          </div>
        </div>
        <div className="second-div-footer">
          <Link to="/login" className="btn-footer-link">
            <button className="button button-top-footer btn-footer">
              Log på
            </button>
          </Link>

          <Link to="/register" className="btn-footer-link">
            <button className="button btn-footer">Få adgang</button>
          </Link>
        </div>
        <div className="third-div-footer">
          <h1 className="white-font exo-font smaller-title title-footer">
            Adress
          </h1>
          <h2 className="white-font roboto-font general-content line-height-content">
            Samsovej 22 <br /> 8382 Hinnerup
          </h2>
        </div>
        <div className="fourth-div-footer">
          <h1 className="white-font exo-font smaller-title title-footer">
            Følg med
          </h1>
          <a
            href="https://www.facebook.com/providebusiness"
            className="white-font roboto-font general-content line-height-content"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/provide-business/"
            className="white-font roboto-font general-content line-height-content"
          >
            LinkedIn
          </a>
        </div>
      </section>
      <section className="lower-section-footer">
        <h3 className="white-font roboto-font small-content">
          Provide Business ApS | CVR-nr 42093238
        </h3>
        <h3 className="white-font roboto-font small-content">
          © Alle rettigheder forbeholdes Provide Business Aps - 2023
        </h3>
        <Link
          to="/privatlivspolitik"
          className="white-font roboto-font small-content politik-link-footer"
        >
          Privatlivspolitik
        </Link>
      </section>
    </footer>
  );
}
