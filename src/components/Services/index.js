import React from 'react';
import icon1 from '../../assets/svg/Security.svg';
import icon2 from '../../assets/svg/Agreement.svg';
import icon3 from '../../assets/svg/Pitching.svg';

import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
 } from './styles';

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
      <ServicesH1>Serviços</ServicesH1>     
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>First</ServicesH2>
          <ServicesP>JSIHIDOAHDOASJDAkaljhsndkahsdoljas aosndhoahsodhas asodhoas</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Second</ServicesH2>
          <ServicesP>JSIHIDOAHDOASJDAkaljhsndkahsdoljas aosndhoahsodhas asodhoas</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Third</ServicesH2>
          <ServicesP>JSIHIDOAHDOASJDAkaljhsndkahsdoljas aosndhoahsodhas asodhoas</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services
