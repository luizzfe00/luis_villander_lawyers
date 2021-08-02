import React from 'react'
import Location from '../../assets/local.jpeg'
import Reunion2 from '../../assets/reu2.jpeg'
import Reunion3 from '../../assets/reu3.jpeg'
import Reunion from '../../assets/reu.jpeg'
import Carousel from 'react-elastic-carousel'
import '../../carousel.css'

import { Container, Background } from './styles';

const InitialSection = () => {
  return (
    <Container>
      <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={5500}>
        <Background Logo={Location} />
        <Background Logo={Reunion} />
        <Background Logo={Reunion2} />
        <Background Logo={Reunion3} />
      </Carousel>
      
    </Container>
  )
}

export default InitialSection;
