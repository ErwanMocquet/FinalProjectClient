import { Routes, Route } from "react-router-dom";
import Forside from "./pages/Forside";
import PBDatabase from "./pages/PBDatabase";
import Referencer from "./pages/Referencer";
import Produkter from "./pages/Produkter";
import Kontakt from "./pages/Kontakt";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Privatlivspolitik from "./pages/Privatlivspolitik";
import Hovedside from "./pages/Hovedside";
import "./css/index.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Forside />} />
        <Route path="pbdatabase" element={<PBDatabase />} />
        <Route path="referencer" element={<Referencer />} />
        <Route path="produkter" element={<Produkter />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="privatlivspolitik" element={<Privatlivspolitik/>}/>
        <Route path="hovedside" element={<Hovedside/>}/>
        <Route
          path="*"
          element={<p>Sorry, but this URL does not exist! Try another one.</p>}
        />
      </Routes>
    </>
  );
}

export default App;
