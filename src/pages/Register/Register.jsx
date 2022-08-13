import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import isDev from "../../adapters/detectType";

const Register = () => {
  const [error, setError] = useState();
  let navigate = useNavigate();
  const RegisterUser = async (obj) => {
    if (!obj.username) {
      setError("Username is required.");
      return;
    }
    if (!obj.password) {
      setError("Password is required.");
      return;
    }
    try {
      const data = await axios.post(`${isDev()}/user`, {
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
      setError("An error occured.");
    }
  };
  return (
    <>
      <RegisterForm error={error} onSubmit={RegisterUser} />
    </>
  );
};

export default Register;
