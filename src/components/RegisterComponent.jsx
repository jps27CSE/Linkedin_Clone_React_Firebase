import { useState } from "react";
import LinkedinLogo from "../assets/linkedinLogo.png";
import "../Sass/LoginComponent.scss";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
const RegisterComponent = () => {
  const navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created");
      navigate("/home");
    } catch (error) {
      toast.error("Cannot Create your Account");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone Number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={login} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <GoogleButton className="button" onClick={googleSignIn} />
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <Link>
            <span className="join-now" onClick={() => navigate("/")}>
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
