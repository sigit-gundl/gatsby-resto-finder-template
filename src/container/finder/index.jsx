import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import PostListing from "../../components/PostListing/PostListing";
import SEO from "../../components/SEO/SEO";
// Components
import { FindContainer, TestimonalContainer, JoinContainer, PartnersContainer } from "../../components/Section/";
// Text
import { TextAlign, Strong, Header2 } from "../../components/Styled/components/text";
// Img
import styled from 'styled-components'
import { ButtonRed } from "../../components/Styled/components/button";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  ${props => props.boxShadow ? "box-shadow: "+props.boxShadow+";" : ""}
`
export const ContainerWrap = styled.div`
  padding: ${props => props.padding ? props.padding : "0 0"};
`
// Pagination
export const Pagination = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
export const Finder = ({config, postEdges, pageContext, searchValue, sticky, element, handleChange}) => {
    return(
      <> 
      <FindContainer searchValue={searchValue} handleChange={handleChange} sticky={sticky} element={element} />
      {searchValue ?
      null
      :
      <>
        <Container boxShadow="-1px 4px 9px 0px rgba(0,0,0,0.1)">
          <TextAlign padding="8px 4vw 0" textAlign="center">
            <Header2>Popular Restaurant</Header2>
            <Strong>The easiest way to your favourite food</Strong>
          </TextAlign>
          <ContainerWrap padding="40px 4px">
            <Helmet title={config.siteTitle} />
            <SEO />
            <PostListing postEdges={postEdges} />
            <RenderPaging pageContext={pageContext}/>
          </ContainerWrap>
        </Container>
        <JoinContainer/>
        <PartnersContainer partners={config.partners}/>
        <TestimonalContainer/>
      </>
      }
      </>
    )
}

const RenderPaging = ({pageContext}) => {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;
    return (
      <Pagination>
        {
        !isFirstPage && 
        <ButtonRed>
          <Link to={prevPage}>Previous</Link>
        </ButtonRed>
        }       
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </Pagination>
    );
  }