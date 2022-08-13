import { useState } from "react";
import axios from "axios";
import isDev from "../adapters/detectType";

const HouseHasCalled = (props) => {
  const [hasCalled, setHasCalled] = useState(props.hasCalled);

  const handleHasCalledChanged = async (event) => {
    setHasCalled(event.target.checked);
    try {
      const config = {
        url: `${isDev()}/house/updateHasCalled`,
        method: "post",
        headers: {
          auth: localStorage.getItem("id"),
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          id: props.id,
          newCall: event.target.checked,
        }),
      };
      const data = await axios(config);
    } catch (error) {}
    console.log(hasCalled);
  };

  return (
    <>
      <label htmlFor="hasCalled" className="form-label mr-2">
        {hasCalled ? "Yes" : "No"}
      </label>
      <input
        type="checkbox"
        name="hasCalled"
        id="hasCalled"
        onChange={handleHasCalledChanged}
        checked={hasCalled}
      />
    </>
  );
};

export default HouseHasCalled;
