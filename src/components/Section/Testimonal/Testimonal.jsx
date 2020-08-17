import React, { Component } from "react";

import { Swipe, autoPlay } from "../../Commons/Hooks/swipe";
import { PaginationDots } from "../../Commons/Components";
// Section
import { Section, SectionWrap, TestimonalStyled } from "../../../components/Styled/components/section";
// Card
import { AvatarCard, FlexCard } from "../../../components/Styled/components/card";
// Commons
import { VerticalMiddle } from "../../Styled/components/commons";
// Display
import { DisplayFlex } from "../../../components/Styled/components/display";
// Text
import { SpaceBr, Strong, Header2, Paragraph, TextAlign } from "../../../components/Styled/components/text";

const AutoPlaySwipe = autoPlay(Swipe);

class TestimonalContainer extends Component {
  state = {
    index: 0
  };
  handleChangeIndex = index => {
    this.setState({
      index
    });
  };
  render() {
    const { index } = this.state;
    return (
      <Section backgroundColor="#242323">
        <VerticalMiddle>
        <SectionWrap>
        <TestimonalStyled>
        <Header2>Our Testimonial</Header2>
        <Strong>Lorem Ipsum Dolor Sit Asmet Consteteur</Strong>
        <SpaceBr/><SpaceBr/>
        <AutoPlaySwipe
          index={index}
          onChangeIndex={this.handleChangeIndex}
          desktopSwipe={true}
        >
          <FlexCard>
            <DisplayFlex>
            <AvatarCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHBKIQ3nJDvcaM1yFmPXGBq24kgZJxTDBe9A&usqp=CAU" alt="" />
            <Strong textAlign="left">Woow thank you, this awesome site and very helpfully if you want search food or something, and very recommended.</Strong>
            </DisplayFlex>
              <TextAlign textAlign="right">
                <Strong>David Smith</Strong>
                <Paragraph>CEO, Company name</Paragraph>
              </TextAlign>
          </FlexCard>
          <FlexCard>
            <DisplayFlex>
            <AvatarCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQru3J5pHhqHu9_CC0kG-UcKHfyIrv5VTTyZA&usqp=CAU" alt="" />
            <Strong textAlign="left">Woow thank you, this awesome site and very helpfully if you want search food or something, and very recommended.</Strong>
            </DisplayFlex>
              <TextAlign textAlign="right">
                <Strong>John doel</Strong>
                <Paragraph>CEO, Company name</Paragraph>
              </TextAlign>
          </FlexCard>
          <FlexCard>
            <DisplayFlex>
            <AvatarCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZlppLf2nH4NSDrrjor5jAF4_nYomHCLH1tg&usqp=CAU" alt="" />
            <Strong textAlign="left">Woow thank you, this awesome site and very helpfully if you want search food or something, and very recommended.</Strong>
            </DisplayFlex>
              <TextAlign textAlign="right">
                <Strong>John doel</Strong>
                <Paragraph>CEO, Company name</Paragraph>
              </TextAlign>
          </FlexCard>
        </AutoPlaySwipe>
        <SpaceBr/><SpaceBr/>
        <PaginationDots
          dots={3}
          index={index}
          onChangeIndex={this.handleChangeIndex}
        />
        </TestimonalStyled>
        </SectionWrap>
        </VerticalMiddle>
      </Section>
    );
    }
}


export default TestimonalContainer;