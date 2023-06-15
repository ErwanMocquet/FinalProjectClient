import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import StreamlinedProcess from "../components/StreamlinedProcess";
import Footer from "../components/Footer";
import ComputerScreen from "../img/computer-screen-turned.png";
import Flowpbdb from "../img/image-flow-pbdb.png";
import ServiceList from "../img/service-list-pbdb.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function PBDatabase() {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Service | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <section className="lightblue-bg first-section-pbdb-cont">
        <div className="left-part-first-pbdb">
          <h1 className="darkblue-font exo-font title">
            PROVIDE BUSINESS DATABASE
          </h1>
          <p className="general-content roboto-font gray-font content-first-part-pbdb line-height-content">
            Hos Provide Business, der selv er telefonsælgere og mødebookere,
            kunne vi ikke undgå at bemærke, hvor svært det kan være at finde en
            opdateret kundedatabase. Vi har besluttet at tage tyren ved hornene
            og udvikle vores egen opdaterede database. Ved at få alle
            oplysninger direkte fra Virk.dk sikrer vi, at alle de oplysninger,
            vi leverer, er nøjagtige, relevante og opdaterede!
          </p>
          <div>
            <Link
              to="/register"
              className="
              content-button-pbdb-first-section roboto-font general-content"
            >
              <button className="button-pbdb-first-section">Få adgang </button>
            </Link>

            <Link
              to="/login"
              className="general-content roboto-font darkblue-font bold"
            >
              Log på
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ComputerScreen}
            alt="Computer Screen Database"
            className="image-first-section-pbdb"
          />
        </div>
      </section>
      <section className="centering">
        <h1 className="exo-font darkblue-font title">Streamlined Process</h1>
        <p className="roboto-font gray-font general-content streamlined-text">
          Brug af vores klientdatabase er tidsbesparende. Når du har taget dit
          abonnement, er du god til at gå og få din virksomhed til at blomstre!
        </p>
        <StreamlinedProcess />
      </section>
      <section className="third-section-pbdb lightblue-bg">
        <div>
          <h1 className="title exo-font darkblue-font">
            OPRET DET BEDSTE MILJØ FOR DIN VIRKSOMHED
          </h1>
          <div className="checkmark-pbdb-cont">
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Vores system opdateres automatisk og direkte med oplysninger,
                der leveres via webhooks direkte fra "Det Centrale
                Virksomhedsregister".
              </p>
            </div>
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Ved at opbygge applikationen med hjælp fra bookere har vi sikret
                os, at vi viser <span className="bold">ALLE</span> de
                oplysninger, du har brug for.
              </p>
            </div>
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Vi sørger for, at alle vores kunder er tilfredse. Vi giver dig
                en personlig dataset baseret på dine behov!
              </p>
            </div>
          </div>
          <Link
            to="/register"
            className="
              content-button-pbdb-first-section"
          >
            <button className="button-pbdb-first-section">Få adgang </button>
          </Link>
        </div>
        <div className="flow-pbdb-cont">
          <img src={Flowpbdb} alt="Flow Database" className="flow-pbdb" />
        </div>
      </section>
      <section className="centering service-list-cont">
        <h1 className="title exo-font darkblue-font">
          VORES FORSKELLIGE TJENESTER
        </h1>
        <img
          src={ServiceList}
          alt="Service List Provide Business Database"
          className="service-list"
        />
        <h3 className="general-content roboto-font gray-font">
          Hvis du har nogen tvivl eller forespørgsel, så kontakt os. Vi er her
          for at hjælpe dig!
        </h3>
      </section>
      <section className="centering">
        <Link to="/kontakt">
          <button className="button">Kontakt os </button>
        </Link>
      </section>
      <section className="centering last-section-pbdb">
        <h1 className="smaller-title gray-font exo-font last-text-pbdb">
          KLAR TIL AT TAGE DIN VIRKSOMHED TIL DET NÆSTE NIVEAU?
        </h1>
        <Link to="/register">
          <button className="button">Få adgang </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
