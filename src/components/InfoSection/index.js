import React from 'react';

import { 
  InfoContainer,
  InfoWrapper,
  Row,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from './styles';

const InfoSection = (props) => {
  const { 
    id, 
    whiteBg,
    imgStart,
    lightText,
    darkText,
    topLine,
    headline,
    description,
    img,
    alt,
    lightTopText,
  } = props;

  return (
    <>
      <InfoContainer id={id} whiteBg={whiteBg}>
        <InfoWrapper>
          <Row imgStart={imgStart}>
            <Column gridArea="col1">
              <TextWrapper>
                <TopLine lightTopText={lightTopText}>{topLine}</TopLine>
                <Heading lightText={lightText} >{headline}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
              </TextWrapper>
            </Column>
            <Column gridArea="col2">
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column>
          </Row>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
