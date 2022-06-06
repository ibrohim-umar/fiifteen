import React from 'react'
import {Data} from './data'
import {ProductContainer,ProductHeading,
     ProductWrapper,
     ProductImg,
     ProductInfo,
     ProductsName,
     ProductDesc,
     ProductPrice,
     ProductButton,
      ProductCard} from './style'

const Products = ({heading, data}) => {
  return (
    <ProductContainer>
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
            {Data.map((product,index) =>{
                return(
                    <ProductCard>
                        <ProductImg src={product.img}  alt={product.alt} />
                        <ProductInfo  key={index} >
                            <ProductsName>  {product.name} </ProductsName>
                            <ProductDesc> {product.desc} </ProductDesc>
                            <ProductPrice>  {product.price} </ProductPrice>
                            <ProductButton> {product.button} </ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )
            } )}
        </ProductWrapper>
    </ProductContainer>
  )
}

export default Products