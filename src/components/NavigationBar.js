import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeNavButton, NavBar, FirstNavButton, NavButton, NavText, HomeNavText } from '../css/NavBarStyles';
import CompanyPage from './CompanyPage.js';
import Home from './Home';


const NavigationBar = (props) => {
  const funds = props.funds;
  return (
      <Router>
        <NavBar>
          <FirstNavButton to='/haneandsons'>
            <NavText>Hane and Sons Ventures</NavText>
          </FirstNavButton>
          <NavButton to='/windler'>
            <NavText>Windler Group</NavText>
          </NavButton>
          <HomeNavButton to='/'>
            <HomeNavText>Home</HomeNavText>
          </HomeNavButton>
          <NavButton to='/olson'>
            <NavText>Olson Ventures</NavText>
          </NavButton>
          <NavButton to='/kings'>
            <NavText>Kings Capital</NavText>
          </NavButton>
        </NavBar>
        <Switch>
          <Route path='/haneandsons'>
            <CompanyPage fund={funds[0]} />
          </Route>
          <Route path='/windler'>
            <CompanyPage fund={funds[1]} />
          </Route>
          <Route path='/olson'>
            <CompanyPage fund={funds[2]} />
          </Route>
          <Route path='/kings'>
            <CompanyPage fund={funds[3]} />
          </Route>
          <Route path='/'>
            <Home funds={funds}/>
          </Route>
        </Switch>
    </Router>
  );
};

export default NavigationBar;





