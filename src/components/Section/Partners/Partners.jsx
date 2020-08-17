import React from "react";


import { Swipe, autoPlay } from "../../Commons/Hooks/swipe";
// Section
import { Section, SectionWrap, PartnerStyled } from "../../../components/Styled/components/section";
// Commons
import { VerticalMiddle, HelperDiv } from "../../Styled/components/commons";
// Text
import { SpaceBr, Strong, Header2, TextAlign } from "../../../components/Styled/components/text";

const AutoPlaySwipe = autoPlay(Swipe);

const PartnersContainer = ({partners}) => {
    return (
      <Section>
        <TextAlign padding="1px 4vw 0" textAlign="center">
          <Header2>Our Partners</Header2>
          <Strong>Restaurants that have joined in (Oursite)</Strong>
        </TextAlign>
        <VerticalMiddle>
        <SectionWrap>
        <PartnerStyled>
        <SpaceBr/><SpaceBr/>
        <SpaceBr/><SpaceBr/>
        <AutoPlaySwipe desktopSwipe={false}>
          {
            partners.map(partner => (
                <img src={require(`../../../assets/img/partners/${partner.owner}.png`)} alt="partners"/>
              )
            )
          }
          </AutoPlaySwipe>
        </PartnerStyled>
        </SectionWrap>
        </VerticalMiddle>
      </Section>
    );
}

export default PartnersContainer;