import React from 'react';
import Logo from './Logo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import style from 'styled-components';
import Home, { GlobalStyle } from '../components/Home';
import Settings from '../components/Settings';
import About from '../components/About';
import { useSelector } from 'react-redux'


const Navigation = style.div`
    background-color: ${props => props.navBarColor}
`;

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

const MenuItem = style(Link)`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.navBarItems};
    font-weight: 300;
    font-size: 18px;
    padding: 0 10px;
    &: {
        color: ${props => props.navBarItemsOnHover};
    }
`;


const selectThemes = state => state.themes;

function NavBar() {

    const themes = useSelector(selectThemes);

    return (
        <>
            <GlobalStyle pageColor={themes.colors.pageColor} />
            <Router>
                <Navigation navBarColor={themes.colors.navBarColor}>
                    <Nav>
                        <MenuItem to='/'>
                            <Logo />
                        </MenuItem>
                        <MenuItems>
                            <li>
                                <MenuItem to='/' navBarItems={themes.colors.navBarItems} navBarItemsOnHover={themes.colors.navBarItemsOnHover}>home</MenuItem>
                            </li>
                            <li>
                                <MenuItem to='/settings' navBarItems={themes.colors.navBarItems} navBarItemsOnHover={themes.colors.navBarItemsOnHover}>settings</MenuItem>
                            </li>
                            <li>
                                <MenuItem to='/about' navBarItems={themes.colors.navBarItems} navBarItemsOnHover={themes.colors.navBarItemsOnHover}>about</MenuItem>
                            </li>
                        </MenuItems>
                    </Nav>
                </Navigation>

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
        </>
    );
}

export default NavBar;