import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import { NavLink } from "react-router-dom";

export const Sidebars = styled.div`
position: fixed;
height: 100%;
width: 400px;
background-color: yellow;
display: grid;
align-items: center;
z-index: 999;
top: 0;
transition: 0.2s ease-in-out;
right: ${({isOpen}) => (isOpen ? '0' : '-1000px' ) };

@media screen  and (max-width:600px) {
    width: 100%;
    
}
`
export const CloseIcon = styled(FaTimes)`
color: #000;
`
export const Icon = styled.div`
position: absolute;
top: 20px;
right: 20px;
background: transparent;
border: transparent;
cursor: pointer;
outline: none;
font-size: 35px;
`
export const Sideitems = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3,80px);
align-items: center;
color: black;
@media screen  and (max-width: 480px) { 
    grid-template-rows:repeat(3, 60px) ;
}

`
export const Sidelinks = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
color: black;
font-size: 35px;
transition: 0.2s ease-in-out;
text-decoration: none;
list-style: none;
cursor: pointer;
&:hover {
    color: #e31837;
    transition: 0.2ms ease-in-out ;
}
`
export const SidebtnWrap =styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Sidebtn = styled(NavLink)`
cursor: pointer;
background: brown;
font-size: 30px;
color: white;
padding: 16px 64px;
border: none;
list-style: none;
text-decoration: none;
font-weight: bolder;
`


