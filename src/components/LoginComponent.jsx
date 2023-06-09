import { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";

export default function LoginComponent() {
  let [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Login Component</h1>
      <input
        placeholder="Enter Your Email"
        onChange={(event) => {
          setCredentials({ ...credentials, email: event.target.value });
        }}
      />
      <input
        placeholder="Enter Your Password"
        onChange={(event) => {
          setCredentials({ ...credentials, password: event.target.value });
        }}
      />
      <button onClick={login}>Log in into Linkedin</button>
    </div>
  );
}
