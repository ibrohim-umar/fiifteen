import styled from 'styled-components'
import Pizza from '../../assets/pizza.jpg'

export const HeroContainer = styled.div`
height: 100vh;
background: linear-gradient(to right, rgba(10,0,0,0.7), rgba(0,0,0,0.1)) , url(${Pizza}) ;
background-position: center;
background-size: cover;
padding: 0%;
margin: 0;
`
export const HeroContant = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-top: 180px;
margin-left: 40px;
gap: 40px;
text-align: center;
@media screen and (max-width: 650px ){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
}

`
export const HeroH1 = styled.h1`

display: flex;
align-items: center;
justify-content: flex-start;
text-decoration: none;
font-size: clamp(50px, 2.5vw, 30px);
color: white;
border-bottom: 7px solid yellow;
border-right: 7px solid yellow;
height: 50px;
padding-right: 50px;
font-weight: bolder;
@media screen and (max-width: 700px) {
    height: 100px;
    width: 80%;
    padding: 20px;
    padding-bottom: 50px;
}


`
export const HeroP1 = styled.p`
color: white;
display: flex;
justify-content: flex-start;
font-size: clamp(30px , 2.5vw, 30px );
font-weight: bolder;
`
export const HeroBtn = styled.button`
background-color: brown;
color: white;
font-size: 25px;
width: 250px;
height: 100px;
border-color: transparent;
padding: 0px 40px;
&:hover {
    background: yellow;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: black;
}
`
