import { useState } from "react";
import LinkedinLogo from "../assets/linkedinLogo.png";
import "../Sass/LoginComponent.scss";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
const LoginComponent = () => {
  const [credentails, setCredentials] = useState({});
  let navigate = useNavigate();
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (error) {
      toast.error("Plase Check Your Credentials");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />

      <div className="google-btn-container">
        <GoogleButton className="button" onClick={googleSignIn} />
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <Link>
            <span className="join-now" onClick={() => navigate("/register")}>
              Join now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
