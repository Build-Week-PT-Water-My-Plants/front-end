import React from "react";
import Login from "./components/login";

import { Route, Switch, Link, useHistory } from "react-router-dom";
import "./App.css";
import Register from "./components/register";
import PrivateRoute from "./utils/PrivateRoute";
import PlantsPage from "./components/plantsPage";
import Profile from "./components/Profile";

// import PlantPage from "./components/plantsPage";

import UpdatePlants from "./components/updateForms/updatePlants";

import UpdateInformation from "./components/updateForms/updateInformation";
import PlantsList from "./components/PlantsList";
import styled from "styled-components";

const StyledLinks = styled.div`
  .link {
    color: #49796b;
  }
`;

function App() {
  const { push } = useHistory();
  const handleSignOut = () => {
    push("/");
    localStorage.removeItem("token");
  };
  return (
    <div className="App">
      <StyledLinks>
        <div className="ui  menu" style={{ margin: "0" }}>
          <a className="item link">
            <Link
              className="link"
              to={"//bw-water-my-plants.netlify.app/"}
              target="_blank"
            >
              Home
            </Link>
          </a>
          <a className="link item">
            <Link className="link" to="/addplant">
              Add New Plant
            </Link>
          </a>
          <a className="link item">
            <Link className="link" to="/plantslist">
              My Plants
            </Link>
          </a>
          <a className="link item">
            <Link className="link" to="/profile">
              Profile
            </Link>
          </a>

          <div className="right menu">
            <div class="item">
              <div
                class="ui green button"
                style={{ backgroundColor: "#a0d6b4 " }}
              >
                {" "}
                <Link className="link" to="/">
                  Login
                </Link>
              </div>
            </div>

            <div class="item">
              <div class="ui button">
                <Link className="link" to="/" onClick={handleSignOut}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Route exact path="/" component={Login} />

        <Route path="/signup" component={Register} />

        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/addplant" component={PlantsPage} />

        {/* <PrivateRoute exact path="/plantsPage" component={Plants} /> */}
        <PrivateRoute exact path="/plantslist" component={PlantsList} />

        <PrivateRoute
          exact
          path="/updateplant/plant/:id"
          component={UpdatePlants}
        />

        <PrivateRoute
          exact
          path="/updateaccount"
          component={UpdateInformation}
        />
      </StyledLinks>
    </div>
  );
}

export default App;
