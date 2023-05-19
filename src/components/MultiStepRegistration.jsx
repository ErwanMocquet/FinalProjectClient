import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/MultiStepRegistration.css";
import axios from "axios";

export default function MultiStepRegistration() {
  const [step, setStep] = useState(1);

  let navigate = useNavigate()

  const [virksomhedsNavn, setVirksomhedsNavn] = useState("");
  const [CVRNummer, setCVRNummer] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [sumupVirksomhedsNavn, setSumupVirksomhedsNavn] = useState("");
  const [sumupCVRNummer, setSumupCVRNummer] = useState("");
  const [sumupName, setSumupName] = useState("");
  const [sumupLastname, setSumupLastname] = useState("");
  const [sumupEmail, setSumupEmail] = useState("");
  const [sumupTel, setSumupTel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isPasswordValid = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/|`+€£:;.,{}()])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleNext = async () => {
    if (step === 1 && (!virksomhedsNavn || !/^\d{8}$/.test(CVRNummer))) {
      setErrorMessage("Please enter a valid CVR Number");
      return;
    }

    setSumupVirksomhedsNavn(virksomhedsNavn);
    setSumupCVRNummer(CVRNummer);

    setErrorMessage("");

    if (
      step === 2 &&
      (!firstname ||
        !lastname ||
        !email ||
        !tel ||
        !password ||
        !confirmPassword)
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (step === 2 && password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (step === 2 && !isPasswordValid(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, containing at least 1 capital letter, 1 number, and 1 special character."
      );
      return;
    }

    setErrorMessage("");

    setSumupName(firstname);
    setSumupLastname(lastname);
    setSumupEmail(email);
    setSumupTel(tel);

    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const onSubmit = () => {
    const data = {
      virksomhedsnavn: sumupVirksomhedsNavn,
      CVRnummer: sumupCVRNummer,
      firstname: sumupName,
      lastname: sumupLastname,
      email: sumupEmail,
      tel: sumupTel,
      password: password,
    };
    axios.post("https://final-project-eaaa.herokuapp.com/auth", data).then(() => {
      navigate("/login")
    });
  };

  return (
    <div>
      <div className="step-indicator">
        <div
          className={`step ${step === 1 ? "active" : ""} ${
            step > 1 ? "completed" : ""
          }`}
        >
          <span className="number-step">1</span>
          <p>Din virksomhed</p>
        </div>
        <div
          className={`step ${step === 2 ? "active" : ""} ${
            step > 2 ? "completed" : ""
          }`}
        >
          <span className="number-step">2</span>
          <p>Om dig</p>
        </div>
        <div className={`step ${step === 3 ? "active" : ""}`}>
          <span className="number-step">3</span>
          <p>Resumé</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="registration-form">
        {step === 1 && (
          <div>
            <h1 className="gray-font exo-font title-registration title-margin">
              Oplysninger om din virksomhed
            </h1>
            <div className="registration-grid-cont">
              <label className="label-registration">
                <input
                  type="text"
                  className="input-registration roboto-font"
                  value={virksomhedsNavn}
                  onChange={(e) => setVirksomhedsNavn(e.target.value)}
                  placeholder="Din virksomheds navn*"
                ></input>
              </label>
              <label className="label-registration">
                <input
                  type="text"
                  className="input-registration roboto-font"
                  value={CVRNummer}
                  onChange={(e) => setCVRNummer(e.target.value)}
                  placeholder="Din CVR-nummer*"
                />
              </label>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h1 className="gray-font exo-font title-registration title-margin">
              Oplysninger om dig
            </h1>
            <div className="registration-grid-cont">
              <label className="label-registration">
                <input
                  type="text"
                  className="input-registration roboto-font"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Navn"
                />
              </label>
              <label className="label-registration">
                <input
                  type="text"
                  className="input-registration roboto-font"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Efternavn"
                />
              </label>
              <label className="label-registration">
                <input
                  type="email"
                  className="input-registration roboto-font"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email adress"
                />
              </label>
              <label className="label-registration">
                <input
                  type="tel"
                  className="input-registration roboto-font"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="Telefon"
                />
              </label>
              <label className="label-registration">
                <input
                  type="password"
                  className="input-registration roboto-font"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Adgangskode"
                />
              </label>

              <label className="label-registration">
                <input
                  type="password"
                  className="input-registration roboto-font"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Bekræft adgangskode"
                />
              </label>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h1 className="gray-font exo-font title-registration title-margin">
              Resumé
            </h1>
            <div className="sumup-container">
              <div className="sumup-text-cont">
                <h1 className="roboto-font darkblue-font small-content bold">
                  Virksomheds Navn:
                </h1>
                <p className="roboto-font gray-font small-content summary-text">
                  {sumupVirksomhedsNavn}
                </p>
              </div>
              <div className="sumup-text-cont">
                <h1 className="roboto-font darkblue-font small-content bold">
                  CVR Nummer:
                </h1>
                <p className="roboto-font gray-font small-content summary-text">
                  {sumupCVRNummer}
                </p>
              </div>
              <div className="sumup-text-cont">
                <h1 className="roboto-font darkblue-font small-content bold">
                  Navn:
                </h1>
                <p className="roboto-font gray-font small-content summary-text">
                  {sumupName}
                </p>
              </div>
              <div className="sumup-text-cont">
                <h1 className="roboto-font darkblue-font small-content bold">
                  Efternavn:
                </h1>
                <p className="roboto-font gray-font small-content summary-text">
                  {sumupLastname}
                </p>
              </div>
              <div className="sumup-text-cont">
                <h1 className="roboto-font darkblue-font small-content bold">
                  Email:
                </h1>
                <p className="roboto-font gray-font small-content summary-text">
                  {sumupEmail}
                </p>
              </div>
              <div className="sumup-text-cont">
                <h1 className="roboto-font darkblue-font small-content bold">
                  Telefon:
                </h1>
                <p className="roboto-font gray-font small-content summary-text">
                  {sumupTel}
                </p>
              </div>
            </div>
          </div>
        )}
        {errorMessage !== "" && <div className="error">{errorMessage}</div>}

        <div className="button-container">
          {step > 1 && (
            <button onClick={handlePrev} className="button-registration">
              TILBAGE
            </button>
          )}
          {step < 3 ? (
            <button onClick={handleNext} className="button-registration">
              NÆSTE
            </button>
          ) : (
            <button
              type="submit"
              className="button-registration"
              onClick={onSubmit}
            >
              Gå til betaling
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
