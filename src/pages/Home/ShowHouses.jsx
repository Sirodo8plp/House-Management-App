import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HouseContainer from "../../components/HouseContainer";
import isDev from "../../adapters/detectType";

const ShowHouses = () => {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState();
  let navigate = useNavigate();

  const NavigateToNewHouse = () => {
    navigate("/newHouse");
  };

  useEffect(() => {
    const config = {
      url: `${isDev()}/house`,
      method: "get",
      headers: {
        auth: localStorage.getItem("id"),
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((data) =>
        setHouses((oldHouses) => {
          console.log(data);
          return [...data.data.houses];
        })
      )
      .catch((error) => setError("An error occured."));
  }, []);
  return (
    <div className="flex flex-column align-items-center mt-5">
      {error && <div className="alert alert-danger">{error}</div>}
      <button
        type="button"
        className="btn btn-success mx-auto d-block"
        onClick={NavigateToNewHouse}
      >
        Add a new house entry
      </button>
      {houses.length === 0 && (
        <div className="alert alert-info d-block mx-auto w-50 text-center my-3">
          You have not added any house entries. Yet!
        </div>
      )}
      {houses.length > 0 && (
        <HouseContainer houses={houses} setHouses={setHouses} />
      )}
    </div>
  );
};

export default ShowHouses;
