import { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
