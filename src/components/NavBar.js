import React from 'react';
import Logo from './Logo';
import navBar from '../styles/navbar.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import style from 'styled-components';
import Home from '../components/Home';
import Settings from '../components/Settings';
import About from '../components/About';


const Nav = style.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const MenuItems = style.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


function NavBar() {
    return (
        <Router>
            <div className="nav-bar">
                <Nav>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <MenuItems>
                        <li>
                            <Link className='menu-item' to='/'>home</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to='/settings'>settings</Link>
                        </li>
                        <li>
                            <Link className='menu-item' to='/about'>about</Link>
                        </li>
                    </MenuItems>
                </Nav>
            </div>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/settings'>
                    <Settings />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;