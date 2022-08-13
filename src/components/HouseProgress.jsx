import { useState } from "react";
import axios from "axios";

const HouseProgress = (props) => {
  const [progress, setProgress] = useState(props.progress);

  const handleProgressChange = async (event) => {
    setProgress(event.target.checked);
    try {
      const config = {
        url: "http://localhost:4000/house/updateIsProgress",
        method: "post",
        headers: {
          auth: localStorage.getItem("id"),
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          id: props.id,
          newProgress: event.target.checked,
        }),
      };
      const data = await axios(config);
      if (data && data.data && data.data.message === "House was updated") {
      }
    } catch (error) {}
  };

  return (
    <>
      <label htmlFor="progress" className="form-label mr-2">
        {progress ? "Yes" : "No"}
      </label>
      {progress ? (
        <input
          type="checkbox"
          name="progress"
          id="progress"
          onChange={handleProgressChange}
          checked={true}
        />
      ) : (
        <input
          type="checkbox"
          name="progress"
          id="progress"
          onChange={handleProgressChange}
        />
      )}
    </>
  );
};

export default HouseProgress;
