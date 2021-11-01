import React from 'react'
import { Nav, NavbarBrand, Navbar, NavItem, NavLink } from 'reactstrap'
import { BsLine, BsFacebook } from 'react-icons/bs'

import './Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/images/go-check-logo.png'
import tel from '../../assets/icons/icon-10.png'

function NavbarLayouts() {
  return (
    <div className="navbar-bg">
      <Navbar expand="md" light>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" width="100" />
        </NavbarBrand>
        <Nav navbar>
          <NavItem className="tel">
            <NavLink href="tel:+66987865592" className="center-div">
              <img src={tel} alt="tel" width="30" className="left"/>
              <div className="white d-inline right">098 786 5592</div>
            </NavLink>
          </NavItem>
          <NavItem className="d-flex social">
            <NavLink href="https://lin.ee/HMRjNzO" target="_blank">
              <BsLine color="white" />
            </NavLink>
            <NavLink href="https://www.facebook.com/gocheckCovid19" target="_blank">
              <BsFacebook color="white" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarLayouts
