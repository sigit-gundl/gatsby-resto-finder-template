import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";

// commons
import { useDropdownSelect } from "../Commons/Hooks"
import styled from "styled-components";
// Commons
import { Brand, FillSpace, FlexItem, FlexItemText } from "../../components/Styled/components/commons";
// Display
import { DisplayFlex, Grid, GridTwoColumn } from "../../components/Styled/components/display";
// Text
import { Header3 } from "../../components/Styled/components/text";
// Icons
import { FacebookSvg, TwitterSvg, YoutubeSvg, InstagramSvg, ArrowDownIcon } from "../../components/Materials/icons";
// Footer
export const FooterStyled = styled.footer``
export const FooterHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 8px;
  border-bottom: solid 1px #fafafa;
  height: 65px;
`
export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
`
export const List = styled.li`
  color: #ccc;
`
const Footer = ({config}) => {
  const lang = ["English", "Afrikaans", "Arabic‏العربية‏‏", "Azerbaijani (Azeri)", "Bulgarian (Български)", "Bangladesh (বাংলা)", "Bosnian", "Czech (Čeština)", "Danish (Dansk)", "German (Deutsch)", "Greek (Ελληνικά)", "English (Australia)", "English (UK)", "Spanish (Español)", "Español (Argentina)", "Bahasa Indonesia"]
  const currency_data = ["Dollars", "Rupiah"]

  const [ language, LangDropdown ] = useDropdownSelect("Language", "", lang);

  const [ currency, CurrencyDropdown ] = useDropdownSelect("Currency", "", currency_data);

    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <>
      <FooterStyled>
        <FooterHeader>
            <Brand>
              {config.siteTitle}
            </Brand>
            <FillSpace/>
            <DisplayFlex>
              <FlexItemText width="92px" none={true}>
                Find me on:
              </FlexItemText>
              <FlexItem>
                <Link to="https://web.facebook.com/">
                 <FacebookSvg/>
                </Link>
                </FlexItem>
                <FlexItem>
                <Link to="https://twitter.com/">
                  <TwitterSvg/>
                </Link>
                </FlexItem>
                <FlexItem>
                <Link to="https://www.youtube.com/">
                  <YoutubeSvg/>
                </Link>
                </FlexItem>
                <FlexItem>
                <Link to="https://www.instagram.com/">
                  <InstagramSvg/>
                </Link>
                </FlexItem>
            </DisplayFlex>
        </FooterHeader>

      <DisplayFlex padding="0 4vw">
        <FlexItem>
          <LangDropdown />
        </FlexItem>
        <FlexItem>
          <CurrencyDropdown/>
        </FlexItem>
        <FlexItem>
          <Header3 margin="0">
            Theme <ArrowDownIcon/>
          </Header3>
        </FlexItem>
      </DisplayFlex>
      
      <Grid minMax="342px,1fr" padding="0 4vw 20px">
        <DisplayFlex alignItems="flex-start">
          <FlexItem>
              <Header3>{config.siteTitle}</Header3>
              <UnorderedList>
                <List>
                  <Link to="/">About</Link>
                </List>
                <List>
                  <Link to="/">{config.siteTitle}.com for Business</Link>
                </List>
                <List>
                  <Link to="/">Privacy Policy</Link>
                </List>
                <List>
                  <Link to="/blog">Blog/Article</Link>
                </List>
                <List>
                  <Link to="/">Career</Link>
                </List>
                <List>
                  <Link to="/">Career (Tech)</Link>
                </List>
                <List>
                  <Link to="/">Help ?</Link>
                </List>
                <List>
                  <Link to="/">Terms and Conditions</Link>
                </List>
                <List>
                  <Link to="/">Become a seller</Link>
                </List>
                <List>
                  <Link to="/">Become Our Partner</Link>
                </List>
              </UnorderedList>
          </FlexItem>
          </DisplayFlex>
          <GridTwoColumn>
          <FlexItem>
              <Header3>Categories</Header3>
              <UnorderedList>
                <List>
                  <Link to="/">Top Categories</Link>
                </List>
                <List>
                  <Link to="/">Best Rated</Link>
                </List>
                <List>
                  <Link to="/">Best Price</Link>
                </List>
                <List>
                  <Link to="/">Latest Submission</Link>
                </List>
              </UnorderedList>
            </FlexItem>
            <FlexItem>
              <Header3>Contact Us</Header3>
              <UnorderedList>
                <List>
                  <Link to="/">97845 Baker st. 567 Los Angeles - US</Link>
                </List>
                <List>
                  <Link to="/">+94 423-23-221</Link>
                </List>
                <List>
                  <Link to="/">info@domain.com</Link>
                </List>
              </UnorderedList>
          </FlexItem>
          </GridTwoColumn>
          <FlexItem>
            <Header3>Payment Method</Header3>
            <img width="60px" src="https://f1-styx.imgix.net/homepage/footer/logo/visa.png?h=50&auto=format" alt="visa"/>
            <img width="60px" src="https://f1-styx.imgix.net/homepage/footer/logo/mastercard.png?h=50&auto=format" alt="mastercard"/>
            <img width="60px" src="https://f1-styx.imgix.net/homepage/footer/logo/jcb.png?h=50&auto=format" alt="jcb"/>
            <img width="60px" src="https://f1-styx.imgix.net/homepage/footer/logo/cod.png?h=50&auto=format" alt="cod"/>
            <img width="60px" src="https://f1-styx.imgix.net/homepage/footer/logo/transfer.png?h=50&auto=format" alt="transfer"/>
            <img width="60px" src="https://f1-styx.imgix.net/homepage/footer/logo/american.png?h=50&auto=format" alt="american"/>
          </FlexItem>
      </Grid>

      <DisplayFlex borderTop="solid 1px #fafafa" color="#ccc" padding="8px">
        <FlexItemText size="1.8vh" minWidth="200px" none={false}>
          {copyright}
        </FlexItemText>
        <FillSpace/>
        <Link to={url}>
            Subscribe
        </Link>
        {/* <div className="retnews-footer--item">
          <UserLinks config={config} labeled />
        </div> */}
      </DisplayFlex>
    </FooterStyled>
    </>
  );
  
}

export default Footer;
