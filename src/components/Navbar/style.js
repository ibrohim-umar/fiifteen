import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaPizzaSlice}  from 'react-icons/fa'

const Nav = styled.div`
display: flex;
justify-content: center;

height: 80px;
font-weight: 700;
background: transparent;

`
const Navlink = styled(Link)`
color: white;
display: flex;
font-size: 35px;
align-items: center;
text-decoration: none;
cursor: pointer;
@media screen  and (max-width:400px) {
  position: absolute ;
  top: 10px;
  left: 25px;
}
`
const NavIcon = styled.div`
position: absolute;
top: 0;
right: 0;
display: block;
align-items: center;
justify-content: center;
font-size: 35px;
margin-right: 10px;
color: white;
p{
    font-weight: bold;
    transform: translate(-110%, 50%);
}
`
const Bars = styled(FaPizzaSlice)`
font-size: 35px;
cursor: pointer;
transform: translate(-10%, -70%);
`



export  {Nav, Navlink, NavIcon, Bars}