import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewHouseForm = (props) => {
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate("/house");
  };

  const [telephone, setTelephone] = useState();

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const [name, setName] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [address, setAddress] = useState();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const [ownerName, setOwnerName] = useState();

  const handleOwnerNameChange = (event) => {
    setOwnerName(event.target.value);
  };

  const [hasCalled, setHasCalled] = useState(false);

  const handleHasCalledChange = (event) => {
    setHasCalled(event.target.checked);
  };

  const [pfn, setPfn] = useState();

  const handlePfnChange = (event) => {
    setPfn(event.target.value);
  };

  const [price, setPrice] = useState();

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const [sharedRooms, setSharedRooms] = useState();

  const handleSharedRoomsChange = (event) => {
    setSharedRooms(event.target.checked);
  };

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      telephone,
      name,
      address,
      ownerName,
      hasCalled,
      pfn,
      price,
      sharedRooms,
    });
  };

  return (
    <>
      <h2 className="p-md-2 my-3">Add a new house entry!</h2>
      <form onSubmit={HandleFormSubmit} className="w-75 mt-3 p-md-2">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Entry Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Telephone Number
          </label>
          <input
            type="text"
            name="telephone"
            className="form-control"
            onChange={handleTelephoneChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            House Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            onChange={handleAddressChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ownerName" className="form-label">
            Owner Name
          </label>
          <input
            type="text"
            name="ownerName"
            className="form-control"
            onChange={handleOwnerNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pfn" className="form-label">
            Personal Favourite Number, in order to make the final decision.
          </label>
          <input
            type="number"
            name="pfn"
            min={0}
            className="form-control"
            onChange={handlePfnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Room Price
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={handlePriceChange}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="sharedRooms" className="form-label">
            Is the house a studio?
          </label>
          <input
            type="checkbox"
            name="sharedRooms"
            className="form-check-input mt-0"
            onChange={handleSharedRoomsChange}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="hasCalled" className="form-label">
            Have you called the owner?
          </label>
          <input
            type="checkbox"
            name="hasCalled"
            className="form-check-input mt-0 ml-1"
            onChange={handleHasCalledChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add House Entry
        </button>
      </form>
      {props.error && (
        <div className="alert alert-warning mt-3">{props.error}</div>
      )}
      {props.isAdded && (
        <div className="alert alert-warning mt-3">
          The house entry was successfully added.
        </div>
      )}
      {props.isAdded && (
        <button className="btn btn-success" onClick={handleReturn}>
          Return
        </button>
      )}
    </>
  );
};

export default NewHouseForm;
