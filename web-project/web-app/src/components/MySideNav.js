import React from "react";
import SideNav, { Toggle , NavItem, NavIcon, NavText, ClickOutside} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from "react-router-dom";

function MySideNav({ handleLogout }) {
  const navigate = useNavigate();
  const hasToken = localStorage.getItem('token');
      
    
      return <SideNav
        
        onSelect={(selected)=> {
          navigate('/' + selected)
        }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="">
            <NavItem eventKey="">
              <NavIcon>
                <i className='fa fa-fw fa-home' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Etusivu
              </NavText>
            </NavItem>
            <NavItem eventKey="charts1">
              <NavIcon>
                <i className='fa fa-fw fa-line-chart' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Lämpötilatiedot ja CO2
              </NavText>
            </NavItem>
            <NavItem eventKey="charts2">
              <NavIcon>
                <i className='fa fa-fw fa-line-chart' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Päästölähteet
              </NavText>
            </NavItem>
            {!hasToken && (
            <NavItem eventKey="signup"> 
              <NavIcon>
                <i className='fa-solid fa-user-plus' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Rekisteröidy
              </NavText>
            </NavItem>
            )}
            {!hasToken && (
            <NavItem eventKey="login"> 
              <NavIcon>
                <i className='fa-solid fa-user' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Kirjaudu sisään
              </NavText>
            </NavItem>
            )}
            {hasToken && (
              <NavItem eventKey="dashboard">
                <NavIcon>
                  <i className='fa-solid fa-user-gear' style={{fontSize:'1.75 em'}}/>
                </NavIcon>
                <NavText>
                  Oma sivu
                </NavText>
              </NavItem>
            )}
            {hasToken && (
              <NavItem eventKey="login" onClick={handleLogout}>
                <NavIcon>
                  <i className='fa-solid fa-user-minus' style={{fontSize:'1.75 em'}}/>
                </NavIcon>
                <NavText>
                  Kirjaudu ulos
                </NavText>
              </NavItem>
            )}
          </SideNav.Nav>
        </SideNav>
     
}
export default MySideNav;