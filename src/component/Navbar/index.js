import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar , Logo, LogoText , UlList , ListItem , Anchor} from  './style.js';
const Nav = () => {
    return (
      <div className="container">
      <Navbar>
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
          <UlList>
            <ListItem ><Anchor as={NavLink} exact to="/ultra-profile">Home</Anchor></ListItem>
            <ListItem ><Anchor href="#">About</Anchor></ListItem>
            <ListItem ><Anchor href="#">Profile</Anchor></ListItem>
            <ListItem ><Anchor href="#">Work</Anchor></ListItem>
            <ListItem ><Anchor href="#">Portfolio</Anchor></ListItem>
            <ListItem ><Anchor as={NavLink} to="/ultra-profile/contact">Contact</Anchor></ListItem>    
          </UlList>
        </Navbar>   
    </div>
    )
}
export default Nav;