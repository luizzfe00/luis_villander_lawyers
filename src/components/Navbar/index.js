import React from 'react'
import Logo from '../../assets/svg/logo.png';
import { FaBars } from 'react-icons/fa';

import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavItem, 
  NavLinks, 
  NavMenu, 
  MobileIcon,
  LogoContainer, 
} from './styles';
import { animateScroll } from 'react-scroll';

const Navbar = (props) => {
  const { toggle } = props;

  return (
    <>
      <Nav>
        <NavbarContainer onClick={() => animateScroll.scrollToTop()}>
          <NavLogo to="/">
           <LogoContainer Logo={Logo} />
          </NavLogo>
          <MobileIcon>
            <FaBars color='#B8860B' onClick={toggle} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks smooth={true} to="about">Quem Somos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} to="partners">Associados</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" onClick={() => animateScroll.scrollToBottom()}>Contato</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
