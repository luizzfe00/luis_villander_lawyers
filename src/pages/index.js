import React, { useState } from 'react'
import InitialSection from '../components/InitialSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { homeObjOne } from '../components/InfoSection/Data';
import PartnersSection from '../components/PartnersSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InitialSection />
      <InfoSection {...homeObjOne} />
      <PartnersSection />
      <Footer />
    </>
  )
}

export default Home
