import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader";
function Planets() {
  const planets = useSelector((state) => state.planets);
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(true)

  useEffect(() => {if (planets.length) setLoader(false)})

  const handleClick = (e) => {
    const positions = e.target.name.split(",").map((n) => parseInt(n, 10));
    const stage = e.target.id;
    dispatch({ type: "ZOOM", payload: [stage, positions] });
  };
  
  return (
    <>
    <Loader loader={loader} />
    <ul className="planets-list">
      {planets.map((p) => (
        <li key={p.id} className="planet">
          <Link
            to={`/planets/${p.name}`}
            id={p.name}
            name={p.position}
            onClick={handleClick}
          >
            {p.name}
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
}
export default Planets;
