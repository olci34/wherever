import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./users/UserForm";
import { Route, Switch } from "react-router-dom";
import TripsContainer from "./trips/TripsContainer";
import PlanetsContainer from "./planets/PlanetsContainer";
import Earth from "./THREE/Earth";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, Stars } from "@react-three/drei";
import Moon from "./THREE/Moon";
import { Suspense } from "react";
import Mars from "./THREE/Mars";
import Venus from "./THREE/Venus";
import Mercury from "./THREE/Mercury";
import Jupiter from "./THREE/Jupiter";
import Saturn from "./THREE/Saturn";
import Uranus from "./THREE/Uranus";
import Neptune from "./THREE/Neptune";
import Pluto from "./THREE/Pluto";
import { useSelector } from "react-redux";
import ZoomIn from "./THREE/ZoomIn";
import Ticket from "./tickets/Ticket";

function App() {
  const positions = useSelector((state) => state.zoomInPositions);
  const stage = useSelector((state) => state.stage);
  return (
    <>
      <Canvas camera={{ position: [160, 10, -160] }}>
        <OrbitControls />
        <Stars fade={true} />
        <pointLight position={[-6, 3, 0]} color="#fdfbd3" intensity={6} />
        <ambientLight
          position={[50, -15, -15]}
          color="#fdfbd3"
          intensity={0.1}
        />
        <Suspense fallback={null}>
          <Earth />
          <Moon />
          <Mars />
          <Venus />
          <Mercury />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
          <Pluto />
        <ZoomIn positions={positions} stage={stage} />
        </Suspense>
      </Canvas>
      <Loader />
      <div className="app">
        <Switch>
          <Route exact path="/wherever">
            <Greeting />
          </Route>
          <Route path="/signup">
            <Greeting />
            <UserForm serve="Sign Up" />
          </Route>
          <Route path="/signin">
            <Greeting/>
            <UserForm serve="Sign In" />
          </Route>
          <Route path="/trips">
            <TripsContainer />
          </Route>
          <Route path="/planets">
            <PlanetsContainer />
          </Route>
          <Route path="/tickets/:passcode">
            <Ticket />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
