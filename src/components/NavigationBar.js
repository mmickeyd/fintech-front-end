import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeNavButton, NavBar, FirstNavButton, NavButton, NavText, HomeNavText } from '../css/NavBarStyles';
import FundPage from './FundPage.js';
import Home from './Home';

const NavigationBar = (props) => {
  const funds = props.funds;
  const [haneandsons, setHaneAndSons] = useState(false);
  const [windler, setWindler] = useState(false);
  const [home, setHome] = useState(true);
  const [olson, setOlson] = useState(false);
  const [kings, setKings] = useState(false);

  const states = [haneandsons, windler, home, olson, kings];
  const stateStrings = ['haneandsons', 'windler', 'home', 'olson', 'kings'];
  let lastButton = 'home';


  const toggleButton = (classname) => {
    let previous;
    for (let i = 0; i < states.length; i++) {
      states[i] ? previous = stateStrings[i] : console.log(states[i]);
    }
    const toggleOn = document.getElementsByClassName(classname)[0];
    const toggleOff = document.getElementsByClassName(previous)[0];
    console.log(toggleOn, toggleOff)
    toggleOn.style.background = '#060d41';
    toggleOn.childNodes[0].style.color = 'white';
    toggleOff.style.background = 'white';
    toggleOff.childNodes[0].style.color = '#060d41';
  }

  const toggleState = (changeState, classname, previous) => {
    setHaneAndSons(false);
    setWindler(false);
    setHome(false);
    setOlson(false);
    setKings(false);
    changeState(true);
    toggleButton(classname, previous)
  }

  return (
      <Router>
        <NavBar>
          <FirstNavButton
            to='/haneandsons'
            className='haneandsons'
            onClick={ () => toggleState(setHaneAndSons, 'haneandsons', lastButton) }
            >
            <NavText>Hane and Sons Ventures</NavText>
          </FirstNavButton>
          <NavButton
            to='/windler'
            className='windler'
            onClick={ () => toggleState(setWindler, 'windler', lastButton) }
            >
            <NavText>Windler Group</NavText>
          </NavButton>
          <HomeNavButton
            to='/'
            className='home'
            onClick={ () => toggleState(setHome, 'home', lastButton) }
            >
            <HomeNavText>Home</HomeNavText>
          </HomeNavButton>
          <NavButton
            to='/olson'
            className='olson'
            onClick={ () => toggleState(setOlson, 'olson', lastButton) }
            >
            <NavText>Olson Ventures</NavText>
          </NavButton>
          <NavButton
            to='/kings'
            className='kings'
            onClick={ () => toggleState(setKings, 'kings', lastButton) }
            >
            <NavText>Kings Capital</NavText>
          </NavButton>
        </NavBar>
        <Switch>
          <Route path='/haneandsons'>
            <FundPage fund={funds[0]} />
          </Route>
          <Route path='/windler'>
            <FundPage fund={funds[1]} />
          </Route>
          <Route path='/olson'>
            <FundPage fund={funds[2]} />
          </Route>
          <Route path='/kings'>
            <FundPage fund={funds[3]} />
          </Route>
          <Route path='/'>
            <Home funds={funds}/>
          </Route>
        </Switch>
    </Router>
  );
};

export default NavigationBar;





