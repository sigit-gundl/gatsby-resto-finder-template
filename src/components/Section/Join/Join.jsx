import React from "react";
import Img from "./img";
// Section
import { Section, SectionWrap, JoinStyled } from "../../Styled/components/section";
// Commons
import { JustifyCenter, VerticalMiddle } from "../../Styled/components/commons";
// img
import { FitCoverImg } from "../../Styled/components/img";
// Text
import { SpaceBr, Header1, Strong } from "../../Styled/components/text";
// Icon
import { ArrowRightIcon } from "../../Materials/icons";
// Button
import { ButtonRed } from "../../Styled/components/button";
import { Link } from "gatsby";


const JoinContainer = () => {
    return (
      <Section>
        <FitCoverImg src={Img} alt=""/>
        <VerticalMiddle>
          <SectionWrap>
            <JoinStyled>
            <Header1>More than 1500 Restaurants</Header1>
            <Strong>Join now and Book a table easily at the best price</Strong>
  <SpaceBr/><SpaceBr/>
            <JustifyCenter>
            <ButtonRed>
              <Link to="/register">
              <Strong>Join Now</Strong>
              <ArrowRightIcon></ArrowRightIcon>
              </Link>
            </ButtonRed>
            </JustifyCenter>
            </JoinStyled>
          </SectionWrap>
          </VerticalMiddle>
      </Section>
    );
}

export default JoinContainer;