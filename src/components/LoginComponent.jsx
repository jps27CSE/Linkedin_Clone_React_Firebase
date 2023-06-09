import { LoginAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";

export default function LoginComponent() {
  const login = () => {
    let res = LoginAPI();
    console.log(res);
  };

  return (
    <div>
      <h1>Login Component</h1>
      <input />
      <button onClick={login}>Log in into Linkedin</button>
    </div>
  );
}
