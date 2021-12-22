import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterContainer = styled.footer`
  background-color: #101522;
  display: flex;
  justify-content: center;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  align-items: flex-start;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  max-width: 300px;
  box-sizing: border-box;
  color: #FFF;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #B8860B;
    transition: 0.3s ease-out;
  }
`;

export const Item = styled.a`
  color: #FFF;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
`;