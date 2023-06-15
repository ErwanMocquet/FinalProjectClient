import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import ServiceList from "../img/service-list-pbdb.png";
import Startup from "../img/start-up.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Produkter() {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Produkter | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <section className="centering top-section-produkter">
        <h1 className="darkblue-font exo-font title title-margin">PRODUKTER</h1>
        <p className="roboto-font general-content gray-font line-height-content">
          Provide Business tilbyder 3 forskellige produkter for at hjælpe alle
          vores potentielle kunder. Vi ønsker at være så fleksible som muligt
          for at sikre, at vi kan hjælpe dig og din virksomhed. Hvis du derfor
          leder efter en opdateret kundedatabase, er du det rette sted!
        </p>
      </section>
      <section className="produkt-card-container">
        <div className="card-produkter">
          <div className="top-part-card-produkter">
            <p className="general-content white-font roboto-font line-height-content">
              Har du blot brug for en udtrækning fra databasen?
            </p>
          </div>
          <div className="bottom-part-card-container">
            <h2 className="gray-font roboto-font subtitle">
              <sup className="superscript">DKK</sup> Tilbud
            </h2>
            <p className="gray-font roboto-font general-content line-height-content content-card-produkter">
              Har du behov for specifik information om virksomheder og ønsker
              ikke at få en abonnement?
              <br />
              <br />
              Så kan du kontakte os nedenfor og få et tilbud tilpasset dine
              specifikke behov.
            </p>

            <Link to="/kontakt">
              <button className="button">Kontakt os</button>
            </Link>
          </div>
        </div>
        <div className="middle-card-produkter">
          <div className="top-part-card-produkter">
            <p className="general-content white-font roboto-font line-height-content">
              Er du allerede en kunde hos Provide Business?
            </p>
          </div>
          <div className="bottom-part-card-container">
            <p className="gray-font lightbold roboto-font general-content card-title-margin">
              Hvis du allerede er en kunde:
            </p>
            <h2 className="gray-font roboto-font subtitle">
              <sup className="superscript">DKK</sup> 700
              <sub className="sub">/ måneder</sub>
            </h2>
            <p className="gray-font roboto-font general-content line-height-content content-card-produkter">
              Denne pakke inkluderer adgang til al information tilgængelig i
              databasen med en minimumskontrakt på et års varighed.
            </p>

            <Link to="/register">
              <button className="button button-card">Opret konto</button>
            </Link>

            <p className="gray-font lightbold roboto-font general-content card-title-margin">
              Hvis du er ikke en kunde:
            </p>
            <h2 className="gray-font roboto-font subtitle">
              <sup className="superscript">DKK</sup> Tilbud
            </h2>
            <p className="gray-font roboto-font general-content line-height-content content-card-produkter">
              Med dette tilbud kan du få adgang til specifikke data i databasen
              mod en månedlig gebyr pr. region. Der medfølger også en
              bindingsperiode på et år.
            </p>

            <Link to="/kontakt">
              <button className="button">Kontakt os</button>
            </Link>
          </div>
        </div>
        <div className="card-produkter">
          <div className="top-part-card-produkter">
            <p className="general-content white-font roboto-font line-height-content">
              Når du opretter en konto hos os
            </p>
          </div>
          <div className="bottom-part-card-container">
            <h2 className="gray-font roboto-font subtitle">
              <sup className="superscript">DKK</sup> 4500
            </h2>
            <p className="gray-font roboto-font general-content line-height-content content-card-produkter">
              Oprettelsesgebyret er en engangsbetaling, der hjælper os med at
              opretholde og holde databasen opdateret for dig. Dette
              oprettelsesgebyr giver dig også adgang til din egen database samt
              adgang til søge- og filtreringsmulighederne.
            </p>

            <Link to="/register">
              <button className="button">Opret konto</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="centering service-list-produkter">
        <h1 className="title exo-font darkblue-font">
          VORES FORSKELLIGE TJENESTER
        </h1>
        <img
          src={ServiceList}
          alt="Service List Provide Business Database"
          className="service-list"
        />
      </section>
      <section className="startup-cont-produkter">
        <div>
          <h1 className="title darkblue-font exo-font title-margin">
            STARTUP DEAL
          </h1>
          <p className="gray-font roboto-font general-content title-margin">
            Som en startup får du en 50% rabat på vores erhvervsabonnement, både
            på den faste og variable del af priserne.
          </p>
          <h2 className="gray-font lightbold roboto-font general-content">
            Kvalifikationer for ansøgning:
          </h2>
          <div className="checkmark-pbdb-cont">
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Omsætning på under 1 mio. kr. om året
              </p>
            </div>
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Virksomheden blev registreret for mindre end 3 år siden
              </p>
            </div>
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Du har ikke været Provide Business - Database
              </p>
            </div>
            <div className="checkmark-text-pbdb">
              <CheckCircleOutlineIcon className="checkmark" />
              <p className="general-content roboto-font gray-font">
                Virksomheden er ikke en del af en koncern
              </p>
            </div>
          </div>

          <Link to="/kontakt">
            <button className="button">Anvende</button>
          </Link>
        </div>
        <div className="startup-image-cont">
          <img src={Startup} alt="Start up deal" />
        </div>
      </section>
      <section className="centering last-section-pbdb">
        <h1 className="smaller-title darkblue-font exo-font last-text-pbdb">
          Har du nogen spørgsmål om vores priser?
        </h1>

        <Link to="/kontakt">
          <button className="button">Kontakt os</button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
