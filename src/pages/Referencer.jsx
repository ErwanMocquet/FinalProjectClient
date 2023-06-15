import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
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

export default function Referencer() {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Referencer | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <section className="centering top-section-referencer">
        <h1 className="darkblue-font exo-font title title-margin">
          SKAB RESULTATER MED OS
        </h1>
        <p className="roboto-font general-content gray-font line-height-content">
          Vi hjælpe virksomhed med at få skabt professionelle og langsistede
          kunderelationer. Vi samarbejder med virksomheder der ønsker at opnå
          sine salgsmål- og mere til.
        </p>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://sandergruppen.dk/">
            <img
              src={SanderGruppen}
              alt="Sander Gruppen Logo"
              className="referencer-logo"
            />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Sander Gruppen</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “Vi bevæger os i en smal niche, og manglede et ekstra ben at støtte
            på, i forhold til at få mødekalenderen fyldt op.
            <br />
            Anette Jensen fra Provide Business, har siden starten af vort
            samarbejde for 1½ år siden, leveret kvalitets arbejde. Ikke nok med
            at møderne står i kø, så er kvaliteten af møderne- og ikke mindst
            Anettes måde at profilere Sander Gruppen på, helt i top.
            <br />
            Anette og Provide Business, vil fremover være en fast del af Sander
            Gruppens strategi, for hvervning af gamle, såvel som nye
            bekendtskaber.
            <br />
            En virksomhed og person, man trygt kan overlade et stort ansvar
            til.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Julie Stilling Skyum
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Projektleder | Sander Gruppen
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://www.adkteknik.dk/">
            <img src={ADK} alt="ADK Teknik Logo" className="referencer-logo" />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">ADK Teknik</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “ADK Teknik & Låse ApS, har de sidste 3 måneder, benytte sig af
            Anette Foss Jensens gode evner til at booke salgsmøder.
            <br />
            Vi har i samarbejdet, haft fokus på alarm, kameraovervågning,
            adgangskontrol og låsesystemer og har ud fra Anettes rådgivning,
            opnået gode resultater.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Jim Frederiksen
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Ejer | ADK Teknik og Låse ApS
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <img
            src={KoldOgSort}
            alt="Kold og Sort Logo"
            className="referencer-logo"
          />
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Kold & Sort</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “Vi har benyttet os af Provide Business ekspertise til at få solgt
            billetter til Danmarks Største Open Air Dance Lounge Bar, Århus Havn
            – og samarbejdet fortsætter. Vi anbefaler klart deres ekspertise i
            vores netværk.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Thomas Kold
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Ejer | Kold & Sort Live
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://www.ase.dk/">
            <img src={ASE} alt="Ase Logo" className="referencer-logo" />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Ase</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “I Ase har vi haft et godt og udviklende samarbejde med
            ProvideBusiness ved Anette Foss Jensen. Vi har været glad for det
            høje faglige niveau, som Anette har udvist. Ligeledes har vi værdsat
            den gode og grundige sparring omkring håndtering af BtB leads samt
            sparring til hvordan man øger sin succesrate med mødebooking i BtB
            segmentet.
            <br />
            Provide Business ved Anette Foss Jensen er en god og troværdig
            samarbejdspartner, når der skal bookes møder.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Steffan Adelhardt
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Digital Lead Manager | Ase
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://rhetorica.dk/">
            <img
              src={Rhetorica}
              alt="Rhetorica Logo"
              className="referencer-logo"
            />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Rhetorica</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
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
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Kim Ege Møller
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Direktør | Rhetorica A/S
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://site-guard.dk/">
            <img
              src={Siteguard}
              alt="Site Guard Logo"
              className="referencer-logo"
            />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Site Guard</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “Jeg har i mere end 10 år haft fornøjelsen af et samarbejde med
            Anette Foss Jensen, og er selvfølgelig fulgt med over i hendes
            seneste konstellation Provide Business. Anette har specialiseret sig
            indenfor vagt & sikkerhedsbranchen, hvor hun med sine gode
            kommunikative evner har booket adskillige kvalitetsmøder med nogle
            af landets største virksomheder. Uanset opgavens størrelse har
            Anette altid taget opgaven til sig og leveret flotte og brugbare
            resultater til Site Guard samt mine tidligere virksomheder. Jeg vil
            til enhver tid anbefale Provide Business!”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Bo Larsen
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Direktør | Site Guard
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://imploy.dk/">
            <img src={Imploy} alt="Imploy Logo" className="referencer-logo" />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Imploy</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “Vi har benyttet Provide Business til at hjælpe os med mødebooking i
            forbindelse med vores salgsstrategi. På trods af at Imploy befinder
            sig i en af de hårdeste brancher, kunne Provide Business booke mange
            kundemøder indenfor den første prøveperiode. Det viser os, at de har
            den rette tilgang til opgaverne, samt dygtige medarbejdere med gode
            salgsevner.
            <br />
            Derfor kan jeg stærkt anbefale Provide Business, hvis I skal have
            hjælp til at finde jeres kommende nye kunder.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Vicram Channi
          </h3>
          <h3 className="general-content gray-font roboto-font">
            CEO | Imploy
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://adagenzy.dk/">
            <img
              src={AdAgenzy}
              alt="Ad Agenzy Logo"
              className="referencer-logo"
            />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">Ad Agenzy</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “Vi har brugt Provide Business til mødebooking, hvilket de har gjort
            rigtig godt. Der er kommet et stabilt flow af kvalificerede møder,
            med gode informationer om, hvad de har talt med et lead om. Bestemt
            anbefalet til B2B mødebooking, selv i konkurrenceprægede nicher.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Kenneth Vilster
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Ejer | Ad Agenzy
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://nrgi.dk/">
            <img src={NRGI} alt="NRGI Logo" className="referencer-logo" />
          </a>
        </div>
        <div className="referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">NRGI</h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “NRGi har igennem en årrække benyttet Provide Business/Anette Foss
            ifm. mødebooking til vores kørende sælgere. Et samarbejde vi er
            meget tilfredse med og som igennem tiden har udviklet sig. Anette og
            hendes medarbejdere arbejder samvittighedsfuldt og professionelt med
            vores opgave og kommer med de varmeste anbefalinger herfra!”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Christian Wulff
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Head of Sales | NRGI
          </h3>
        </div>
      </section>
      <section className="referencer-cont">
        <div className="referencer-logo-cont">
          <a href="https://tornvigmaskiner.dk/">
            <img
              src={Tornvig}
              alt="Tornvig Christensen Maskiner Logo"
              className="referencer-logo"
            />
          </a>
        </div>
        <div className="last-referencer-content-cont">
          <h2 className="subtitle exo-font darkblue-font">
            Tornvig Christiensen Maskiner
          </h2>
          <p className="general-content gray-font roboto-font line-height-content referencer-content">
            “Vi valgte i Tornvig Christensen maskiner at outsource vores møde
            bookinger efter en år række at have haft det In-House.
            <br />
            Ved en tilfældighed blev vi henvist til Provide business , hvilket
            vi ikke har fortrudt et sekund. Vi føler os godt rustet og har fra
            starten i august 2022 følt en ro i maven ved at ligge bookingerne
            over til Anette og hendes gode og prof medarbejdere.
            <br />
            Vi har en tæt dialog med Provide, de er omstillings parate når vi
            har haft nye procedurer i hvordan vi skulle gribe tingene an, og
            Anette er super god at at følge op på ting hvis noget skal
            finjusteres mm. Kan varmt anbefale Provide.”
          </p>
          <h3 className="general-content darkblue-font bold roboto-font person-referencer">
            Søren Bjerggaard
          </h3>
          <h3 className="general-content gray-font roboto-font">
            Salgschef og medejer | Tornvig Christensen Maskiner A/S
          </h3>
        </div>
      </section>
      <Footer />
    </main>
  );
}
