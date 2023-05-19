import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ReferencerCarousel.css";
import SanderGruppen from "../img/logos/sandergruppen.png";
import ADK from "../img/logos/adkteknik.png";
import KoldOgSort from "../img/logos/koldogsort.png";
import ASE from "../img/logos/ase.png";
import Rhetorica from "../img/logos/rhetorica.png";
import Siteguard from "../img/logos/siteguard.png";
import Imploy from "../img/logos/imploy.png";
import AdAgenzy from "../img/logos/adagenzy.png";
import NRGI from "../img/logos/nrgi.png";
import Tornvig from "../img/logos/tornvig.png";

export default function ReferencerCarousel({setSliderRef}) {
    const sliderRef =useRef(null)

    React.useEffect(() => {
      if (setSliderRef) {
        setSliderRef(sliderRef.current);
      }
    }, [setSliderRef]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "30px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider ref={sliderRef} {...settings} className="carousel-cont roboto-font">
      <div className="carousel-bloc">
        <div className="review-logo-cont">
          <a href="https://sandergruppen.dk/">
            <div className="logo-cont-display">
              <img
                src={SanderGruppen}
                alt="Sander Gruppen Logo"
                className="review-logo"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content general-content gray-font">
            “Vi bevæger os i en smal niche, og manglede et ekstra ben at støtte
            på, i forhold til at få mødekalenderen fyldt op. Anette Jensen fra
            Provide Business, har siden starten af vort samarbejde for 1½ år
            siden, leveret kvalitets arbejde. Ikke nok med at møderne står i kø,
            så er kvaliteten af møderne- og ikke mindst Anettes måde at
            profilere Sander Gruppen på, helt i top. Anette og Provide Business,
            vil fremover være en fast del af Sander Gruppens strategi, for
            hvervning af gamle, såvel som nye bekendtskaber. En virksomhed og
            person, man trygt kan overlade et stort ansvar til.”
          </p>
          <h2 className="review-person-name small-content bold">
            Julie Stilling Skyum
          </h2>
          <p className="review-person-title small-content gray-font">
            Projektleder | Sander Gruppen
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://www.adkteknik.dk/">
            <div className="logo-cont-display">
              <img
                src={ADK}
                alt="ADK Logo"
                className="review-logo big-logos-review"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content general-content gray-font">
            “ADK Teknik & Låse ApS, har de sidste 3 måneder, benytte sig af
            Anette Foss Jensens gode evner til at booke salgsmøder. Vi har i
            samarbejdet, haft fokus på alarm, kameraovervågning, adgangskontrol
            og låsesystemer og har ud fra Anettes rådgivning, opnået gode
            resultater.”
          </p>
          <h2 className="review-person-name small-content bold darkblue-font">
            Jim Frederiksen
          </h2>
          <p className="review-person-title small-content gray-font">
            ADK Teknik og Låse ApS
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <div className="logo-cont-display">
            <img
              src={KoldOgSort}
              alt="Kold & Sort Logo"
              className="review-logo"
            ></img>
          </div>
        </div>
        <div>
          <p className="review-content gray-font general-content">
            “Vi har benyttet os af Provide Business ekspertise til at få solgt
            billetter til Danmarks Største Open Air Dance Lounge Bar, Århus Havn
            – og samarbejdet fortsætter. Vi anbefaler klart deres ekspertise i
            vores netværk.”
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Thomas Kold
          </h2>
          <p className="review-person-title gray-font small-content">
            Ejer | Kold & Sort Live
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://www.ase.dk/">
            <div className="logo-cont-display">
              <img
                src={ASE}
                alt="ASE Logo"
                className="review-logo big-logos-review"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content gray-font general-content">
            “I Ase har vi haft et godt og udviklende samarbejde med Provide
            Business ved Anette Foss Jensen. Vi har været glad for det høje
            faglige niveau, som Anette har udvist. Ligeledes har vi værdsat den
            gode og grundige sparring omkring håndtering af BtB leads samt
            sparring til hvordan man øger sin succesrate med mødebooking i B2B
            segmentet. Provide Business ved Anette Foss Jensen er en god og
            troværdig samarbejdspartner, når der skal bookes møder.”
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Steffan Adelhardt
          </h2>
          <p className="review-person-title gray-font small-content">
            Digital Lead Manager, ASE
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://rhetorica.dk/">
            <div className="logo-cont-display">
              <img
                src={Rhetorica}
                alt="Rhetorica Logo"
                className="review-logo"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content gray-font general-content">
            “I Rhetorica er vi verdensmestre i at uddanne ledere og specialister
            i at komme ud over rampen med deres kommunikation. Og vi er
            superskarpe til at hjælpe virksomheder med at sætte ord på deres
            strategi, og få ordene at leve ude i virkeligheden. Høj faglighed og
            kvalitet er altafgørende og bærende i alt hvad vi gør.
            <br />
            Og det er præcis derfor vi er lykkelige over, at der findes en
            virksomhed som Provide Business. Her er de eksperter i alt det, som
            vi synes er svært; det strategiske salgsarbejde og opkaldet til
            potentielle kunder og samarbejdspartnere. Når du nu ikke selv er den
            bedste, eller den mest tålmodige – så er det en fornøjelse at opleve
            den kvalitet, loyalitet og målrettethed man oplever hos Provide
            Business”
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Kim Ege Møller
          </h2>
          <p className="review-person-title gray-font small-content">
            Direktør | Rhetorica ApS
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://site-guard.dk/">
            <div className="logo-cont-display">
              <img
                src={Siteguard}
                alt="Site Guard Logo"
                className="review-logo big-logos-review"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content general-content gray-font">
            “Jeg har i mere end 10 år haft fornøjelsen af et samarbejde med
            Anette Foss Jensen, og er selvfølgelig fulgt med over i hendes
            seneste konstellation Provide Business. Anette har specialiseret sig
            indenfor vagt & sikkerhedsbranchen, hvor hun med sine gode
            kommunikative evner har booket adskillige kvalitetsmøder med nogle
            af landets største virksomheder. Uanset opgavens størrelse har
            Anette altid taget opgaven til sig og leveret flotte og brugbare
            resultater til Site Guard samt mine tidligere virksomheder. Jeg vil
            til enhver tid anbefale Provide Business! Ovenstående kan uddybes
            yderligere på tlf. 51 21 95 60.”
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Bo Larsen
          </h2>
          <p className="review-person-title gray-font small-content">
            Direktør | Site Guard
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://imploy.dk/">
            <div className="logo-cont-display">
              <img
                src={Imploy}
                alt="Imploy Logo"
                className="review-logo  big-logos-review"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content gray-font general-content">
            “Vi har benyttet Provide Business til at hjælpe os med mødebooking i
            forbindelse med vores salgsstrategi. På trods af at Imploy befinder
            sig i en af de hårdeste brancher, kunne Provide Business booke mange
            kundemøder indenfor den første prøveperiode. Det viser os, at de har
            den rette tilgang til opgaverne, samt dygtige medarbejdere med gode
            salgsevner.
            <br />
            Derfor kan jeg stærkt anbefale Provide Business, hvis I skal have
            hjælp til at finde jeres kommende nye kunder."
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Vicram Channi
          </h2>
          <p className="review-person-title gray-font small-content">
            CEO | Site Guard
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://adagenzy.dk/">
            <div className="logo-cont-display">
              <img
                src={AdAgenzy}
                alt="AD Agenzy Logo"
                className="review-logo"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content general-content gray-font">
            “Vi har brugt Provide Business til mødebooking, hvilket de har gjort
            rigtig godt. Der er kommet et stabilt flow af kvalificerede møder,
            med gode informationer om, hvad de har talt med et lead om.
            <br />
            Bestemt anbefalet til B2B mødebooking, selv i konkurrenceprægede
            nicher.”
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Kenneth Vilster
          </h2>
          <p className="review-person-title gray-font small-content">
            Ejer | AD Agenzy
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://nrgi.dk/">
            <div className="logo-cont-display">
              <img src={NRGI} alt="NRGI Logo" className="review-logo"></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content general-content gray-font">
            “NRGi har igennem en årrække benyttet Provide Business/Anette Foss
            ifm. mødebooking til vores kørende sælgere. Et samarbejde vi er
            meget tilfredse med og som igennem tiden har udviklet sig. Anette og
            hendes medarbejdere arbejder samvittighedsfuldt og professionelt med
            vores opgave og kommer med de varmeste anbefalinger herfra!"
          </p>
          <h2 className="review-person-name darkblue-font bold small-font">
            Christian Wulff
          </h2>
          <p className="review-person-title gray-font small-content">
            Head of sales | NRGI
          </p>
        </div>
      </div>
      <div className="review-bloc roboto-font">
        <div className="review-logo-cont">
          <a href="https://tornvigmaskiner.dk/">
            <div className="logo-cont-display">
              <img src={Tornvig} alt="NRGI Logo" className="review-logo"></img>
            </div>
          </a>
        </div>
        <div>
          <p className="review-content general-content gray-font">
            “Vi valgte i Tornvig Christensen maskiner at outsource vores møde
            bookinger efter en år række at have haft det In-House.
            <br />
            Ved en tilfældighed blev vi henvist til Provide business, hvilket vi
            ikke har fortrudt et sekund.
            <br /> Vi føler os godt rustet og har fra starten i august 2022 følt
            en ro i maven ved at ligge bookingerne over til Anette og hendes
            gode og prof medarbejdere. Vi har en tæt dialog med Provide, de er
            omstillings parate når vi har haft nye procedurer i hvordan vi
            skulle gribe tingene an, og Anette er super god at at følge op på
            ting hvis noget skal finjusteres mm.
            <br /> Kan varmt anbefale Provide.”
          </p>
          <h2 className="review-person-name darkblue-font bold small-content">
            Søren Bjerggaard
          </h2>
          <p className="review-person-title gray-font small-content">
            Salgschef og medejer | Tornvig Christensen Maskiner A/S
          </p>
        </div>
      </div>
    </Slider>
  );
}
