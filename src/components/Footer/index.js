import React from 'react'

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkTitle,
  FooterLinkItem,
  FooterLink,
  Item
} from './styles';

const Footer = () => {
  return (
    <FooterContainer id="contacts">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Contato(s)</FooterLinkTitle>
              <Item>(83) 98719-5469</Item>
              <Item>luisvillander@gmail.com</Item>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLink to="about">Quem Somos</FooterLink>
              <FooterLink to="partners">Sócios</FooterLink>
              <FooterLink to="areas">Áreas de Atuação</FooterLink>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
