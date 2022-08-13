import axios from "axios";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  let navigate = useNavigate();
  const HandleLogin = async (obj) => {
    if (!obj.username) {
      setError("Username cannot be empty.");
      return;
    }
    if (!obj.password) {
      setError("Password cannot be empty.");
      return;
    }
    try {
      const data = await axios.post("http://localhost:4000/user/login", {
        username: obj.username,
        password: obj.password,
      });
      if (data && data.data && data.data.id) {
        window.localStorage.setItem("id", data.data.id);
        navigate("/house");
        return;
      } else {
        setError("User was not found.");
      }
    } catch (error) {
      setError("User was not found.");
    }
  };

  return <LoginForm error={error} onSubmit={HandleLogin} />;
};

export default Login;
