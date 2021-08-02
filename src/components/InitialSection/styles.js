import styled from 'styled-components';

export const Container = styled.div`
  background: #f9f9f9;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const Background = styled.div`
  background: url(${({Logo}) => Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 650px;
  height: 550px;
`