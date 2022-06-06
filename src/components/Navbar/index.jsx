import React from 'react'
import {Nav, Navlink, NavIcon, Bars} from './style'

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Navlink    to='/' >
         Pizza
      </Navlink>
      <NavIcon onClick={toggle}  >
          <p>Menu</p>
          <Bars/>
      </NavIcon>
    </Nav>
  )
}

export default Navbar