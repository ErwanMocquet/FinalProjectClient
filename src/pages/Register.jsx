import { Helmet, HelmetProvider } from "react-helmet-async";
import MultiStepRegistration from "../components/MultiStepRegistration";

export default function Register() {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Register | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <section className="main-register centering">
        <h1 className="darkblue-font exo-font title">OPRET DIN KONTO</h1>
        <MultiStepRegistration/>
      </section>
    </main>
  );
}
