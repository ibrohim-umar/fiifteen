import React from 'react'
import {Sidebars,  Sidebtn,SidebtnWrap, Sideitems, Sidelinks,Icon,CloseIcon} from './style'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <Sidebars  isOpen={isOpen} onClick={toggle}  >
        <Icon>
            <CloseIcon/>
        </Icon>
       
            <Sideitems>
            <Sidelinks  to='/' >Pizzas</Sidelinks>
            <Sidelinks  to='/' >Dessert</Sidelinks>
            <Sidelinks  to='/' >Full menu</Sidelinks>
           </Sideitems>
        <SidebtnWrap>
             <Sidebtn to='/' > Order now </Sidebtn>
        </SidebtnWrap>
        
        
    </Sidebars>
  )
}

export default Sidebar