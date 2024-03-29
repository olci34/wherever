import { HEROKU_URL } from "../constants/AppUrlConstants";

export default function postTrip(itenary) {
  return (dispatch) => {
    const configTrip = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ trip: itenary }),
    };
    fetch(`${HEROKU_URL}/trips`, configTrip)
      .then((resp) => resp.json())
      .then((trip) => {
        dispatch({ type: "POST_TRIP", payload: trip });
      });
  };
}
