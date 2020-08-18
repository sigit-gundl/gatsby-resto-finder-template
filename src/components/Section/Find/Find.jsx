import React from "react";
import FindImg from "./img";
import SearchForm from "../../Form/search";
// Section
import { Section, SectionWrap, FindStyled } from "../../../components/Styled/components/section";
// Commons
import { JustifyCenter, VerticalMiddle } from "../../Styled/components/commons";
// Text
import { SpaceBr, Strong, Header1 } from "../../../components/Styled/components/text";
// Img
import { FitCoverImg } from "../../../components/Styled/components/img";

const FindContainer = ({ searchValue, handleChange }) => {
    return (
      <Section active={searchValue}>
      {searchValue ? null : <FitCoverImg src={FindImg} alt=""/>}
      <VerticalMiddle>
      <SectionWrap>
      <FindStyled>
      {searchValue ?
      null
      :
      <>
        <Header1>
          Find Restourant Near You
        </Header1>
        <Strong>Find restaurants, specials, and coupons for free</Strong>
        <SpaceBr/>
      </>
      }
      <JustifyCenter>
        <SearchForm searchValue={searchValue} handleChange={handleChange}/>
      </JustifyCenter>
      </FindStyled>
    </SectionWrap>
    </VerticalMiddle>

    </Section>

    );
}

export default FindContainer;
