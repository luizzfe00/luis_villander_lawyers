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
              <Item href="mailto:luisvillander@gmail.com" target="_blank">luisvillander@gmail.com</Item>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Endereço</FooterLinkTitle>
              <Item> R. Vice-prefeito Antônio de Carvalho Sousa - Estacao Velha, 450, Campina Grande - PB</Item>
              <Item> Centro juridico Ronaldo Cunha Lima - Sala 1513- 15º andar.</Item>
              <Item> Quase em frente ao fórum</Item>
              <Item> Atendimento todas as tardes a partir de 14:30</Item>
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
