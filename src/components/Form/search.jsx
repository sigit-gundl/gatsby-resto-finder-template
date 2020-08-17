import React, { useState } from "react";

import {
  // Form
  Form, LabelIcon,
  // Search
  SearchInputWrap, SearchInputItem, SearchInput,
  // Search List
  SearchListWrap, SearchResultDiv, LocationBindDiv,
  // Loader
  DotsWrap, DotsLoading, DotLoading, CardLoaderWrap, CardLoaderElement, CardLoaderChildren,
} from "../Styled/components/index"
// Display
import {  GridTwoColumn, DisplayFlex, FlexItemSvg, } from "../Styled/components/display";
// Button
import { ButtonRed } from "../Styled/components/button";
// icon
import {
  SearchIcon,
  GetLocationIcon,
  PinOutlineIcon,
} from '../Materials/icons'
// Text
import { Strong } from "../Styled/components/text"

const SearchForm = ({ sticky, searchValue, handleChange }) => {
    const [find, setFind] = useState(false);
    const [findState, setFindState] = useState();
    const handleClick = () => {
      setFind(!find);
      setTimeout(() => {
        setFind(find => !find)
        setFindState(findState => !findState);
      }, 2000);
    };
   return(
    <Form active={searchValue} action="">
      <SearchInputWrap>
        <SearchInputItem>
        <LabelIcon htmlFor="search">
          <SearchIcon/>
        </LabelIcon>
        <SearchInput value={searchValue} onChange={handleChange} type="text" id="search" placeholder="What are you looking for . . ."/>
        <DotsWrap>
          {
          find ?
          <DotsLoading>
            <DotLoading></DotLoading>
            <DotLoading></DotLoading>
            <DotLoading></DotLoading>
          </DotsLoading>
          : 
          null
          }
        </DotsWrap>
        </SearchInputItem>
        <SearchInputItem>
          <LabelIcon onClick={handleClick} className={`retnews-label-icon ${findState ? `active` : ``}`}>
            <GetLocationIcon findState={findState}/>
          </LabelIcon>
        </SearchInputItem>
        <SearchInputItem>
          <ButtonRed>
            <Strong>Search</Strong>
          </ButtonRed>
        </SearchInputItem>
      </SearchInputWrap>
    {
    searchValue ?
    <>
    <SearchListWrap>
    {
        findState ?
        <LocationBindDiv>
          <DisplayFlex>
            <FlexItemSvg>
              <PinOutlineIcon/>
            </FlexItemSvg>
            <Strong>Location</Strong>
          </DisplayFlex>
        </LocationBindDiv>
        : 
        null
      }
    <SearchResultDiv>
      <Strong>This Search Bind:{searchValue}</Strong>
    </SearchResultDiv>
    <GridTwoColumn>
      <CardLoaderWrap>
        <DisplayFlex>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
        </DisplayFlex>
        <CardLoaderElement></CardLoaderElement>
        <CardLoaderElement></CardLoaderElement>
      </CardLoaderWrap>
      <CardLoaderWrap>
        <DisplayFlex>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
        </DisplayFlex>
        <CardLoaderElement></CardLoaderElement>
        <CardLoaderElement></CardLoaderElement>
      </CardLoaderWrap>
      <CardLoaderWrap>
        <DisplayFlex>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
        </DisplayFlex>
        <CardLoaderElement></CardLoaderElement>
        <CardLoaderElement></CardLoaderElement>
      </CardLoaderWrap>
      <CardLoaderWrap>
        <DisplayFlex>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
          <CardLoaderChildren></CardLoaderChildren>
        </DisplayFlex>
        <CardLoaderElement></CardLoaderElement>
        <CardLoaderElement></CardLoaderElement>
      </CardLoaderWrap>
    <br/>
    </GridTwoColumn> 
    </SearchListWrap>
    </>
    : 
    null
    }
  </Form>
   )
}

export default SearchForm;