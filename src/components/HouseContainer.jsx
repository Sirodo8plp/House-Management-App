import HouseProgress from "./HouseProgress";
import HouseHasCalled from "./HouseHasCalled";
import HouseAvailability from "./HouseAvailability";

const HouseContainer = (props) => {
  return (
    <>
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Telephone</th>
            <th scope="col">Owner</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.houses.map((house, index) => {
            return (
              <tr
                key={`hfr${house.id}`}
                className={`${
                  house.isAvailable ? "table-success" : "table-danger"
                }`}
              >
                <th scope="row">{index + 1}</th>
                <td>{house.name}</td>
                <td>{house.address}</td>
                <td>{house.telephone}</td>
                <td>{house.ownerName}</td>
                <td>{house.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Availability</th>
            <th scope="col">In Progress</th>
            <th scope="col">Called</th>
            <th scope="col">Studio</th>
          </tr>
        </thead>
        <tbody>
          {props.houses.map((house, index) => {
            return (
              <tr
                key={`hsr${house.id}`}
                className={`${
                  house.isAvailable ? "table-success" : "table-danger"
                }`}
              >
                <td>{index + 1}</td>
                <td>
                  <HouseAvailability
                    id={house.id}
                    isAvailable={house.isAvailable}
                    setHouses={props.setHouses}
                    houses={props.houses}
                  />
                </td>
                <td>
                  <HouseProgress
                    id={house.id}
                    progress={house.inProgress}
                    key={`hp${house.id}`}
                  />
                </td>
                <td>
                  <HouseHasCalled
                    id={house.id}
                    hasCalled={house.hasCalled}
                    key={`hhc${house.id}`}
                  />
                </td>
                <td>{house.sharedRooms ? "No" : "Yes"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default HouseContainer;
