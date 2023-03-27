import React from "react";
import SideNav, { Toggle , NavItem, NavIcon, NavText, ClickOutside} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from "react-router-dom";

function MySideNav() {
  const navigate = useNavigate();
      
    
      return <SideNav
        
        onSelect={(selected)=> {
          navigate('/' + selected)
        }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className='fa fa-fw fa-home' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Home
              </NavText>
            </NavItem>
            <NavItem eventKey="charts1">
              <NavIcon>
                <i className='fa fa-fw fa-line-chart' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Temp & CO2 charts
              </NavText>
            </NavItem>
            <NavItem eventKey="charts2">
              <NavIcon>
                <i className='fa fa-fw fa-line-chart' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Emission charts
              </NavText>
            </NavItem>
            <NavItem eventKey="signup"> 
              <NavIcon>
                <i className='fa-solid fa-user-plus' style={{fontSize:'1.75 em'}}/>
              </NavIcon>
              <NavText>
                Sign Up
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
     
}
export default MySideNav;