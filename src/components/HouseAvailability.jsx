import { useState } from "react";
import axios from "axios";

const HouseAvailability = (props) => {
  const [isAvailable, setIsAvailable] = useState(props.isAvailable);

  const handleIsAvailableChange = async (event) => {
    setIsAvailable(event.target.checked);
    const houses = props.houses.map((house) =>
      house.id === props.id
        ? { ...house, isAvailable: event.target.checked }
        : house
    );
    props.setHouses(houses);
    try {
      const config = {
        url: "http://localhost:4000/house/updateIsAvailable",
        method: "post",
        headers: {
          auth: localStorage.getItem("id"),
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          id: props.id,
          newAvailability: event.target.checked,
        }),
      };
      const data = await axios(config);
    } catch (error) {}
  };

  return (
    <>
      <label htmlFor="isAvailable" className="form-label mr-2">
        {isAvailable ? "Yes" : "No"}
      </label>
      <input
        type="checkbox"
        name="isAvailable"
        id="isAvailable"
        onChange={handleIsAvailableChange}
        checked={isAvailable}
      />
    </>
  );
};

export default HouseAvailability;
