import { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginAPI } from "../api/AuthAPI";
const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login Component</h1>
      <div className="auth-inputs">
        <input
          type="email"
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          className="common-input"
          placeholder="Enter your Email"
        />

        <input
          type="email"
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          className="common-input"
          placeholder="Enter your Password"
        />
      </div>
      <button onClick={login} className="login-btn">
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
