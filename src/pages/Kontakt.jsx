import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";

export default function Kontakt() {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Kontakt | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <section className="grid-kontakt-cont">
        <div className="left-side-grid-kontakt">
          <h1 className="exo-font darkblue-font title title-margin">
            KONTAKT OS
          </h1>
          <p className="roboto-font gray-font general-content title-margin line-height-content">
            Har du nogen spørgsmål om databasen, vores virksomhed eller noget
            andet? <br />
            Så lad os tale sammen! Vi forsøger at svare så hurtigt som muligt.
          </p>
          <div>
            <a
              className="general-content gray-font roboto-font line-height-content"
              href="mailto:info@providebusiness.dk"
            >
              info@providebusiness.dk
            </a>
          </div>
          <div className="phone-footer-cont">
            <a
              className="general-content gray-font roboto-font"
              href="tel:+4570345611"
            >
              +45 70 34 56 11
            </a>
          </div>
        </div>
        <section className="right-side-grid-kontakt">
          <div className="grid-right-section-kontakt">
            <div>
              <h1 className="gray-font exo-font smaller-title title-margin">
                Åbningstider
              </h1>
              <p className="gray-font roboto-font general-content">
                Hverdage: 08:30 - 15:00
              </p>
            </div>
            <div>
              <h1 className="gray-font exo-font smaller-title title-margin">
                Find os her
              </h1>
              <p className="gray-font roboto-font general-content line-height-content">
                Samsøvej 22,
                <br />
                8382 Hinnerup
              </p>
            </div>
          </div>
          <div className="map-cont">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2216.6262647886624!2d10.069099216050228!3d56.249965961004825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c16acd865f0c3%3A0x16baea52ce11f420!2sSams%C3%B8vej%2022%2C%208382%20Hinnerup!5e0!3m2!1sen!2sdk!4v1679479485201!5m2!1sen!2sdk"
                  title="Google Maps Provide Business"
                  loading="lazy"
                  className="googlemap"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
