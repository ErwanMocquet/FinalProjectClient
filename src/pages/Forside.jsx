import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimationForside from "../components/AnimationForside";
import ReferencerCarousel from "../data/ReferencerCarousel";
import BgTopForside from "../img/shapes-background.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import sælger from "../img/sælger-pb.jpg";
import { Link } from "react-router-dom";

export default function Forside() {
  const [sliderRef, setSliderRef] = useState(null);

  const goToPrevSlide = () => {
    if (sliderRef) {
      sliderRef.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef) {
      sliderRef.slickNext();
    }
  };

  return (
    <main>
      <Navbar />
      <HelmetProvider>
        <Helmet>
          <title>Forside | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <AnimationForside />
      <section className="forside-top-cont">
        <div>
          <h3 className="raleway-font gray-font">
            Ikke bare endnu <br />
            en kunderdatabase
          </h3>
        </div>
        <div className="title-forside-top-cont">
          <h1 className="exo-font title darkblue-font">
            VI GIVER DIG <i className="bold">OPDATEREDE</i> OPLYNINGER ON DINE
            FREMTIDIGE KUNDER
          </h1>
        </div>
      </section>
      <section>
        <img
          src={BgTopForside}
          alt="Multidimensional Shapes Forside"
          className="forside-bg"
        />
      </section>
      <section className="centering handdrawn-cont">
        <h1 className="smaller-title exo-font darkblue-font">
          Vi har specialiseret os i servicelevering, mødebooking og
          leadgenerering <span className="text-hilight">for vores kunder</span>.
          Vores hovedmål et at gøre DIN virksomhed til den bedste version af sig
          selv.
        </h1>
      </section>
      <section className="lightblue-bg carousel-container">
        <div className="custom-arrows">
          <button className="custom-prev-arrow" onClick={goToPrevSlide}>
            <ArrowBackIosIcon />
          </button>
        </div>
        <ReferencerCarousel setSliderRef={setSliderRef} />
        <div className="custom-arrows">
          <button className="custom-next-arrow" onClick={goToNextSlide}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </section>
      <section className="grid-forside-cont">
        <div className="left-side-grid-forside">
          <h1 className="smaller-title darkblue-font exo-font title-content-forside">
            Designet til telefonsælgere
          </h1>
          <p className="general-content gray-font roboto-font line-height-content">
            Telemarketingfolks oplevelse er i centrum for alt, hvad vi design
            hos Provide Business.
            <br />
            <br />
            Alle oplysningerne i databasen er bygget for at gøre livet lettere
            for telefonsælgere. Betydning kortere søgetid, nem adgang til
            information og glade telefonsælgere!
            <br />
            <br />
            Telemarketingmedarbejdernes oplevelse er i centrum for vores
            udvikling. Provide Business - Database har været udviklet med din
            erfaring på centret.
          </p>
        </div>
        <div className="right-side-grid-forside">
          <img
            src={sælger}
            alt="Sælger Provide Business"
            className="image-forside-sælger"
          />
        </div>
      </section>
      <section className="centering button-forside-cont">
        <Link to="/kontakt">
          <button className="button">Tilmed dig nu </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
