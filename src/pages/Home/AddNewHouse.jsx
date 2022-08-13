import axios from "axios";
import { useState } from "react";
import NewHouseForm from "./NewHouseForm";
import isDev from "../../adapters/detectType";

const AddNewHouse = () => {
  const [error, setError] = useState();
  const [isAdded, setIsAdded] = useState();

  const NewHouse = async (obj) => {
    try {
      const config = {
        url: `${isDev()}/house`,
        method: "post",
        headers: {
          auth: localStorage.getItem("id"),
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          name: obj.name,
          telephone: obj.telephone,
          address: obj.address,
          isAvailable: true,
          inProgress: true,
          ownerName: obj.ownerName,
          hasCalled: obj.hasCalled,
          personalFavouriteNumber: obj.pfn || -1,
          price: obj.price,
          sharedRooms: obj.sharedRooms,
          userId: window.localStorage.getItem("id"),
        }),
      };
      const data = await axios(config);
      setIsAdded(true);
    } catch (error) {
      setError("An error has occured.");
    }
  };
  return <NewHouseForm error={error} onSubmit={NewHouse} isAdded={isAdded} />;
};

export default AddNewHouse;
