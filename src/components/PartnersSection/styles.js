import styled from 'styled-components';

export const Container = styled.div`
  background: #f9f9f9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 30px;
  position: relative;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  width: 46%;
`;

export const Background = styled.div`
  background: url(${({Logo}) => Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 600px;
  height: 500px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  line-height: 4rem;
`;

export const Content = styled.p`
  line-height: 2rem;
  font-weight: 600;
`;

export const ContentContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
`;