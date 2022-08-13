import { useState } from "react";

const RegisterForm = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ username, password });
  };
  return (
    <>
      <div className="mt-3">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </form>
        {props.error && (
          <div className="alert alert-warning mt-3">
            <strong>Holy guacamole!</strong> {props.error}
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
