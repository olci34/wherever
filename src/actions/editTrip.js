import { HEROKU_URL } from "../constants/AppUrlConstants";

export default function editTrip(trip) {
  return (dispatch) => {
    const configTrip = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ trip: trip }),
    };
    fetch(`${HEROKU_URL}/trips/${trip.id}`, configTrip)
      .then((resp) => resp.json())
      .then((trip) => dispatch({ type: "EDIT_TRIP", payload: trip }));
  };
}
