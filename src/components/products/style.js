import styled from 'styled-components'

export const ProductContainer = styled.div`
padding: 0;
margin: 0;
min-height: 100vh;
background: black;
color: white;
display: grid;
grid-template-columns: auto;
/* padding: 8rem calc((100vw - 1300px) / 2); */
`
export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;

justify-content: flex-start;

margin: 0 auto;

`
export const ProductCard = styled.div`
margin: 0 4rem;
line-height: 2;
width: 300px;
`
export const ProductsName = styled.div`
font-size: 28px;
font-weight: 400;
color: white;
`
export const ProductHeading = styled.div`
font-size: clamp(20px, 2.5vw, 30px);
text-align: center;
margin-bottom: 50px ;
`
export const ProductImg = styled.img`
height: 300px;
min-width: 300px;
max-width: 100%;
box-shadow: 8px 8px white;
`
export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
text-align: center;
`
export const ProductDesc  = styled.div`
margin-bottom: 10px;
`
export const ProductPrice = styled.div`
font-size: 20px;
margin-bottom: 10px;
`
export const ProductButton = styled.div`
font-size: 14px;
padding: 15px 60px;
border: none;
background: brown;
color: white;
`
