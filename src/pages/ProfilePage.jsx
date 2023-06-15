import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ProfilePage() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [email, setEmail] = useState("");
  const [virksomhed, setVirksomhed] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirmation does not match");
      return;
    }

    axios
      .put(
        "https://final-project-eaaa.herokuapp.com/auth/changepassword",
        {
          oldPassword: oldPassword,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Password updated successfully");
        }
      });
  };

  const deleteAccount = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmation) {
      axios
        .delete(`https://final-project-eaaa.herokuapp.com/auth/delete/${id}`, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert("Account deleted successfully");
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios.get(`https://final-project-eaaa.herokuapp.com/auth/basicinfo/${id}`).then((response) => {
      setEmail(response.data?.email || "");
      setVirksomhed(response.data?.virksomhedsnavn || "");
    });
  }, [id]);

  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <title>Min Profile | Provide Business - Database</title>
        </Helmet>
      </HelmetProvider>
      <div className="profile-cont">
        <div className="user-info-cont">
          <div>
            <h1 className="smaller-title exo-font darkblue-font title-margin">
              Profile
            </h1>
            <p className="small-content roboto-font gray-font line-height-content">
              Your email address is your identity on Provide Business -
              Database.
              <br />
              You should use it lo log in.
            </p>
          </div>
          <div>
            <div className="title-margin">
              <h1 className="info-cont-profile">
                <p className="small-content gray-font roboto-font margin-profile-info">
                  Email Address
                </p>
                <p className="display-info-cont small-content darkblue-font roboto-font">
                  {email}
                </p>
              </h1>
            </div>
            <div>
              <h1 className="info-cont-profile">
                <p className="small-content gray-font roboto-font margin-profile-info">
                  Virksomhedsnavn
                </p>
                <p className="display-info-cont small-content darkblue-font roboto-font">
                  {virksomhed}
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="user-info-cont">
          <div>
            <h1 className="smaller-title exo-font darkblue-font title-margin">
              Password
            </h1>
            <p className="small-content roboto-font gray-font line-height-content">
              Here you can change your password to your will. This will not
              affect
              <br />
              the access to the database as long as you remember it.
            </p>
          </div>
          <div className="password-profile-cont">
            <label className="small-content gray-font roboto-font margin-profile-info">
              Current Password
            </label>
            <input
              type="text"
              placeholder="Your current password..."
              className="margin-profile-info input-profile"
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
            />
            <label className="small-content gray-font roboto-font margin-profile-info">
              New Password
            </label>
            <input
              type="text"
              placeholder="Your new password..."
              className="margin-profile-info input-profile"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            />
            <label className="small-content gray-font roboto-font margin-profile-info">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="Repeat your new password..."
              className="title-margin input-profile"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
            <button className="btn" onClick={changePassword}>
              {" "}
              Update password
            </button>
          </div>
        </div>
        <div className="user-info-cont-last">
          <div>
            <h1 className="smaller-title exo-font darkblue-font title-margin">
              Account
            </h1>
            <p className="small-content roboto-font gray-font line-height-content">
              Here you can close your account
              <br />
              <i className="bold">Warning:</i> Closing your account is
              irreversible
              <br />
              <br />
              <i className="bold">Note:</i> If you are under the 1 year
              bond-contract, <br />
              you'll be charged until the first year is completed.
            </p>
          </div>
          <div className="closing-button-cont">
            <button
              className="closing-button roboto-font general-content"
              onClick={deleteAccount}
            >
              Close this account
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default ProfilePage;
