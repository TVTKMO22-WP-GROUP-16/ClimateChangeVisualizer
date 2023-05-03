import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function MySideNav({ handleLogout }) {
  const navigate = useNavigate();
  const hasToken = localStorage.getItem("token");

  return (
    <div class="sidebar">
      <SideNav
        onSelect={(selected) => {
          navigate("/" + selected);
        }}
        id="sidebar"
        style={{
          background: "#2d2d2d",
          top: "0px",
          bottom: "0px",
          position: "fixed",
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="">
          <NavItem eventKey="">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75 em" }} />
            </NavIcon>
            <NavText>Etusivu</NavText>
          </NavItem>
          <NavItem eventKey="charts1">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75 em" }}
              />
            </NavIcon>
            <NavText>Lämpötilat ja Co2 Pitoisuudet</NavText>
          </NavItem>
          <NavItem eventKey="charts2">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75 em" }}
              />
            </NavIcon>
            <NavText>Päästölähteet</NavText>
          </NavItem>

          {!hasToken && (
            <NavItem eventKey="signup">
              <NavIcon>
                <i
                  className="fa-solid fa-user-plus"
                  style={{ fontSize: "1.75 em" }}
                />
              </NavIcon>
              <NavText>Rekisteröidy</NavText>
            </NavItem>
          )}
          {!hasToken && (
            <NavItem eventKey="login">
              <NavIcon>
                <i
                  className="fa-solid fa-user"
                  style={{ fontSize: "1.75 em" }}
                />
              </NavIcon>
              <NavText>Kirjaudu sisään</NavText>
            </NavItem>
          )}
          {hasToken && (
            <NavItem eventKey="dashboard">
              <NavIcon>
                <i
                  className="fa-solid fa-user-gear"
                  style={{ fontSize: "1.75 em" }}
                />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>
          )}
          {hasToken && (
            <NavItem eventKey="login" onClick={handleLogout}>
              <NavIcon>
                <i
                  className="fa-solid fa-user-minus"
                  style={{ fontSize: "1.75 em" }}
                />
              </NavIcon>
              <NavText>Logout</NavText>
            </NavItem>
          )}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
export default MySideNav;
