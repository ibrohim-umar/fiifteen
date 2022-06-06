import React, {useState} from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebarmenu'
import { HeroContainer, HeroContant, HeroH1, HeroP1, HeroBtn } from './style'

const Hero = () => {
    const [isOpen, setIsopen] = useState(false)


    const toggle = () => {
        setIsopen(!isOpen)
    }

  return (
    <HeroContainer>
       <Navbar toggle={toggle} />
       <Sidebar toggle={toggle} isOpen={isOpen}  />
       <HeroContant   >
           <HeroH1> GREATEST  PIZZA   EVER </HeroH1>
           <HeroP1>READY IN 60 SECONDS .</HeroP1>
           <HeroBtn> PLACE ORDER </HeroBtn>
       </HeroContant>
       
    </HeroContainer>
  )
}

export default Hero