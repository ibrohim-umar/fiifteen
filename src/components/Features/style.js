import styled from 'styled-components'
import Pizza from '../../assets/pizza.jpg'

export const FeaturesWrap = styled.div`
width: 100%;
height: 90vh;
display: flex;
gap: 50px;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
background: linear-gradient(to right, rgba(0,0,0,0.4),rgba(0,0,0,0.9)), url(${Pizza}) ;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: none;
`
export const FeatureH1 = styled.div`
color: white;
border-color: transparent;
font-size: 50px;
letter-spacing: 1px;
text-shadow: 0px 1px white;
`
export const FeatureButton = styled.button`
color: black;
background-color: yellow;
border: transparent;
padding: 20px 40px;
font-weight: bolder;
font-size: 35px;
border-radius: 10px;
&:hover {
background: brown;
color: white;
transition: 0.1s ease-in-out;
}
`