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
              <Item>(83) 99603-4762</Item>
              <Item>luisvillander@gmail.com</Item>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLink to="about" smooth={true}>Quem Somos</FooterLink>
              <FooterLink to="partners" smooth={true}>Associados</FooterLink>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
