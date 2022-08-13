import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <h1 className="text-center mt-3 mb-3">Home Management</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Register />
          </div>
          <div className="col">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
