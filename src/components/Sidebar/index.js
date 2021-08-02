import React from 'react'

import { Container, Icon, CloseIcon, Wrapper, Menu, SidebarLink } from './styles';

const Sidebar = (props) => {
  const { isOpen, toggle } = props;
  return (
    <Container isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <Wrapper>
        <Menu>
          <SidebarLink to="about">Quem Somos</SidebarLink>
          <SidebarLink to="partners">Sócios</SidebarLink>
          <SidebarLink to="areas">Áreas de Atuação</SidebarLink>
          <SidebarLink to="contact">Contato</SidebarLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar;
